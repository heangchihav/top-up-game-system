import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsLargeScreen } from '@/hooks/useIsLargeScreen';
import { useLocalSearchParams } from 'expo-router';
import TabsNavigator from '@/navigation/TabsNavigator';
import StackNavigator from '@/navigation/StackNavigator';
import ModalComponent from '@/components/Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LanguageLayout() {
  const { theme } = useTheme();
  const { setLanguage } = useLanguage();
  const isLargeScreen = useIsLargeScreen();
  const isDarkMode = theme === 'dark';
  const { lang } = useLocalSearchParams<{ lang: string }>();
  const [newsModalVisible, setNewsModalVisible] = useState(false);
  // Update language when route param changes
  useEffect(() => {
    if (lang) {
      setLanguage(lang as 'en' | 'fr');
    }
    async function initialize() {
      const hasVisited = await AsyncStorage.getItem('hasVisited');
      if (!hasVisited) {
        setNewsModalVisible(true);
        await AsyncStorage.setItem('hasVisited', 'true');
      }
    }
    initialize();
  }, [lang, setLanguage]);
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff' }}>
      {isLargeScreen ? (
        // Navbar for Large Screens
        <StackNavigator />
      ) : (
        // Bottom Tabs for Small Screens
        <TabsNavigator />
      )}
      <ModalComponent
        visible={newsModalVisible}
        onClose={() => setNewsModalVisible(false)}
      />
    </GestureHandlerRootView>
  );
}
