import { useEffect } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsLargeScreen } from '@/hooks/useIsLargeScreen';
import { useLocalSearchParams } from 'expo-router';
import TabsNavigator from '@/navigation/TabsNavigator';
import StackNavigator from '@/navigation/StackNavigator';

export default function LanguageLayout() {
  const { theme } = useTheme();
  const { setLanguage } = useLanguage();
  const isLargeScreen = useIsLargeScreen();
  const isDarkMode = theme === 'dark';
  const { lang } = useLocalSearchParams<{ lang: string }>();

  // Update language when route param changes
  useEffect(() => {
    if (lang) {
      setLanguage(lang as 'en' | 'fr');
    }
  }, [lang, setLanguage]);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: isDarkMode ? '#000000' : '#ffffff' }}>
      {isLargeScreen ? (
        // Navbar for Large Screens
        <StackNavigator />
      ) : (
        // Bottom Tabs for Small Screens
        <TabsNavigator />
      )}

    </GestureHandlerRootView>
  );
}
