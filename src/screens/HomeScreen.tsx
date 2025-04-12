import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Slider from '@/components/Slider';
import Card from '@/components/Card';
import { data } from '@/data/CardData';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useIsLargeScreen } from '@/hooks/useIsLargeScreen';

// Types
interface CardItem {
  id: string | number;
  title: string;
  image: string;
  screen: string;
}

interface CategoryData {
  title: string;
}

interface SectionData {
  [key: string]: [CategoryData, { [key: string]: CardItem[] }];
}

// Responsive card sizing
const screenWidth = Dimensions.get('window').width;
const maxCardWidth = 300;
const spacing = 20;
const numColumns = Math.floor(screenWidth / (maxCardWidth + spacing));
const cardWidth = (screenWidth - spacing * (numColumns + 1)) / numColumns;

export default function HomeScreen(): JSX.Element {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const isLargeScreen = useIsLargeScreen();
  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#000b59' : '#ffffff' }}>
      {isLargeScreen && <Navbar />}

      {/* Scrollable content */}
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: isDark ? '#000b59' : '#ffffff' },
        ]}
        contentContainerStyle={styles.scrollContent}
      >
        <Slider />

        {(data as SectionData[]).map((section, index) => {
          const categoryKey = Object.keys(section)[0];
          const [categoryMeta, itemsData] = section[categoryKey];
          const itemsKey = Object.keys(itemsData)[0];
          const items = itemsData[itemsKey];

          return (
            <View key={index} style={styles.sectionWrapper}>
              <View style={styles.section}>
                <View style={styles.headerContainer}>
                  <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
                    {categoryMeta.title}
                  </Text>
                </View>

                <View style={styles.grid}>
                  {items.map((item: CardItem) => (
                    <View
                      key={item.id}
                      style={[styles.cardWrapper, { width: cardWidth }]}
                    >
                      <Card
                        title={item.title}
                        image={item.image}
                        screen={item.screen}
                      />
                    </View>
                  ))}
                </View>
              </View>
            </View>
          );
        })}

        <Footer />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  sectionWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  section: {
    width: '100%',
    maxWidth: 1500,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 12,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  cardWrapper: {
    margin: spacing / 2,
  },
});
