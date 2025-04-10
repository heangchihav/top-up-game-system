import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '@/app/[lang]/index';
import ContactScreen from '@/app/[lang]/contact';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SmallScreenNav from '@/components/SmallScreenNav';
import { View, StyleSheet } from 'react-native';
// import { DrawerNavigator } from './DrawerNavigation';

export default function TabsNavigator() {
  const Tabs = createBottomTabNavigator();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <SmallScreenNav />
      <View style={styles.container}></View>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: isDark ? '#1a1a1a' : 'white',
            borderTopColor: isDark ? '#333' : '#e5e5e5',
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: isDark ? '#888' : '#666',
        }}
      >
        <Tabs.Screen
          name="index"
          component={HomeScreen}
          options={{
            title: language === 'fr' ? 'Accueil' : 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Account"
          component={ContactScreen}
          options={{
            title: language === 'fr' ? 'Account' : 'Account',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />

      </Tabs.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10
  },
});
