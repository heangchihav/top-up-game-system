import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Slider from '@/components/Slider';

export default function HomeScreen() {
  const { isDark } = useTheme();
  const { language } = useLanguage();

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}>
      <Slider />
      <View style={styles.ContentContainer}>
        <Text style={[styles.text, { color: isDark ? '#ffffff' : '#000000' }]}>
          {language === 'fr' ? 'Page d\'accueil' : 'Home Page'}
        </Text>
      </View>
    </View>
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
