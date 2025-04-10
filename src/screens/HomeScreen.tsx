import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Slider from '@/components/Slider';
import Card from '@/components/Card';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const { isDark } = useTheme();
  const { language } = useLanguage();

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}>
      <Slider />
      <View style={styles.ContentContainer}>
        <Text style={[styles.text, { color: isDark ? '#ffffff' : '#000000' }]}>
          {language === 'fr' ? 'Page d\'accueil' : 'Home Page'}
        </Text>
        <View>
          <Card
            title="React Native"
            description="Learn how to build mobile apps using React Native and Expo."
            imageUrl="https://reactnative.dev/img/tiny_logo.png"
            onPress={() => alert("React Native pressed")}
          />
          <Card
            title="TypeScript Support"
            description="Type-safe components make development more robust and fun!"
            onPress={() => alert("TypeScript pressed")}
          />
          <Card
            title="Expo Platform"
            imageUrl="https://expo.dev/static/brand/square-512x512.png"
            onPress={() => alert("Expo card clicked")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ContentContainer: {
    marginBottom: 20,
    height: '100%',
  },
});
