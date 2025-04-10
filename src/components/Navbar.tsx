import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcherButton';
import AvatarModal from './AvatarModal';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
    const { isDark } = useTheme();

    return (
        <View style={[styles.navbar, { backgroundColor: isDark ? 'blue' : '#008fff' }]}>
            {/* Left: Logo */}
            <View style={styles.leftSection}>
                <Image
                    source={{ uri: 'https://i.imgur.com/QnX5mel.png' }}
                    style={styles.logo}
                />
            </View>

            {/* Center: Menu */}
            <View style={styles.centerSection}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Contact</Text>
                </TouchableOpacity>
            </View>

            {/* Right: Avatar / Theme */}
            <View style={styles.rightSection}>
                <ThemeSwitcher />
                <LanguageSwitcher />
                <AvatarModal />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgb(49, 0, 0)',
        backdropFilter: Platform.OS === 'web' ? 'blur(10px)' : undefined,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,
    },
    leftSection: {
        justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 50,
        resizeMode: 'contain',
    },
    centerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    menuItem: {
        marginHorizontal: 8,
    },
    menuText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});

export default Navbar;
