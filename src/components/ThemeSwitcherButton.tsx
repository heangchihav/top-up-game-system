import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Modal,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeType, useTheme } from '@/contexts/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, isDark, setTheme } = useTheme();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownAnim = useRef(new Animated.Value(0)).current;
  const [buttonLayout, setButtonLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const buttonRef = useRef<View>(null);

  useEffect(() => {
    if (dropdownVisible) {
      buttonRef.current?.measure((fx, fy, width, height, px, py) => {
        setButtonLayout({ x: px, y: py, width, height });
      });

      Animated.timing(dropdownAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start();
    } else {
      Animated.timing(dropdownAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  }, [dropdownVisible]);

  const handleThemeChange = useCallback(
    (newTheme: ThemeType) => {
      setTheme(newTheme);
      setDropdownVisible(false);
    },
    [setTheme]
  );

  const getThemeIcon = (themeType: ThemeType) => {
    switch (themeType) {
      case 'light':
        return <Ionicons name="sunny" size={16} color="#FFA500" />;
      case 'dark':
        return <Ionicons name="moon" size={16} color="#FFD700" />;
      case 'system':
        return <Ionicons name="phone-portrait" size={16} color={isDark ? '#ccc' : '#444'} />;
    }
  };

  const getThemeLabel = (themeType: ThemeType) => {
    switch (themeType) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'System';
    }
  };

  const dropdownStyle = {
    opacity: dropdownAnim,
    transform: [
      {
        scale: dropdownAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.9, 1],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isDark && styles.buttonDark]}
        onPress={() => setDropdownVisible(!dropdownVisible)}
        ref={buttonRef}
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText, isDark && styles.textDark]}>
          {getThemeLabel(theme)}
        </Text>
        {getThemeIcon(theme)}
        <Ionicons
          name={dropdownVisible ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={isDark ? '#fff' : '#000'}
        />
      </TouchableOpacity>

      {/* Modal dropdown */}
      <Modal
        transparent
        visible={dropdownVisible}
        animationType="none"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <Pressable
          style={styles.modalBackdrop}
          onPress={() => setDropdownVisible(false)}
        >
          <Animated.View
            style={[
              styles.dropdown,
              isDark && styles.dropdownDark,
              dropdownStyle,
              {
                top: buttonLayout.y + buttonLayout.height + 4,
                left: buttonLayout.x,
                minWidth: buttonLayout.width,
              },
            ]}
          >
            {(['light', 'dark', 'system'] as ThemeType[]).map((themeOption) => {
              const isActive = theme === themeOption;
              return (
                <TouchableOpacity
                  key={themeOption}
                  style={[
                    styles.dropdownItem,
                    isActive && (isDark ? styles.activeItemDark : styles.activeItem),
                  ]}
                  onPress={() => handleThemeChange(themeOption)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.dropdownText,
                      isDark && styles.textDark,
                      isActive && styles.activeText,
                    ]}
                  >
                    {getThemeLabel(themeOption)}
                  </Text>
                  {isActive && (
                    <Ionicons
                      name="checkmark"
                      size={16}
                      color={isDark ? '#fff' : '#000'}
                      style={{ marginLeft: 'auto' }}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </Animated.View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    gap: 8,
  },
  buttonDark: {
    backgroundColor: '#222',
    borderColor: '#444',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  textDark: {
    color: '#fff',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background effect
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    elevation: 5,
    zIndex: 9999,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  dropdownDark: {
    backgroundColor: '#222',
    borderColor: '#444',
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
  },
  activeItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  activeItemDark: {
    backgroundColor: '#333',
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 14,
    color: '#000',
  },
  activeText: {
    fontWeight: '600',
  },
});
