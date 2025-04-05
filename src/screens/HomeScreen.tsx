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
      <Text style={[styles.text, { color: isDark ? '#ffffff' : '#000000' }]}>
        {language === 'fr' ? 'Page d\'accueil' : 'Home Page'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
