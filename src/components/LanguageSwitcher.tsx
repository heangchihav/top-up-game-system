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
import { Language, VALID_LANGUAGES, useLanguage } from '@/contexts/LanguageContext';

const languages = [
  { code: 'en', name: 'English', avatar: 'https://res.cloudinary.com/da8ox9rlr/image/upload/flags/1x1/sh_myho2n.jpg' },
  { code: 'fr', name: 'French', avatar: 'https://res.cloudinary.com/da8ox9rlr/image/upload/flags/1x1/yt_fnqbkh.jpg' },
  // Add more languages here
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
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

  const handleLanguageChange = useCallback(
    (newLanguage: Language) => {
      if (VALID_LANGUAGES.includes(newLanguage)) {
        setLanguage(newLanguage);
        setDropdownVisible(false);
      }
    },
    [setLanguage]
  );

  const getLanguageIcon = (languageCode: string) => {
    const language = languages.find((lang) => lang.code === languageCode);
    return language?.avatar ? (
      <Image source={{ uri: language.avatar }} style={styles.flagIcon} />
    ) : null;
  };

  const getLanguageLabel = (languageCode: string) => {
    const language = languages.find((lang) => lang.code === languageCode);
    return language?.name || '';
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
        style={styles.button}
        onPress={() => setDropdownVisible(!dropdownVisible)}
        ref={buttonRef}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>{getLanguageLabel(language)}</Text>
        {getLanguageIcon(language)}
        <Ionicons
          name={dropdownVisible ? 'chevron-up' : 'chevron-down'}
          size={16}
          color="#000"
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
              dropdownStyle,
              {
                top: buttonLayout.y + buttonLayout.height + 4,
                left: buttonLayout.x,
                minWidth: buttonLayout.width,
              },
            ]}
          >
            {languages.map((lang) => {
              const isActive = language === lang.code;
              return (
                <TouchableOpacity
                  key={lang.code}
                  style={[styles.dropdownItem, isActive && styles.activeItem]}
                  onPress={() => handleLanguageChange(lang.code as Language)}
                  activeOpacity={0.7}
                >
                  {getLanguageIcon(lang.code)}
                  <Text
                    style={[
                      styles.dropdownText,
                      isActive && styles.activeText,
                    ]}
                  >
                    {getLanguageLabel(lang.code)}
                  </Text>
                  {isActive && (
                    <Ionicons
                      name="checkmark"
                      size={16}
                      color="#000"
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
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  flagIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
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
  dropdownText: {
    fontSize: 14,
    color: '#000',
  },
  activeText: {
    fontWeight: '600',
  },
});
