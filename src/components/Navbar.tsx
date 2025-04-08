import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcherButton';

const Navbar: React.FC = () => {
    return (
        <View style={styles.navbar}>
            {/* Left: Logo */}
            <View style={styles.leftSection}>
                <Image
                    source={{ uri: 'https://i.imgur.com/drzZwS1.png' }}
                    style={{ width: 40, height: 40, resizeMode: 'contain' }}
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

            {/* Right: Account */}
            <View style={styles.rightSection}>
                <TouchableOpacity style={styles.accountButton} activeOpacity={0.7}>
                    <Text style={styles.accountText}>Account</Text>
                </TouchableOpacity>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        zIndex: 1000,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    leftSection: {
        justifyContent: 'center',
    },
    centerSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    menuItem: {
        marginHorizontal: 10,
    },
    menuText: {
        fontSize: 16,
        color: '#333',
    },
    accountButton: {
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 4,
    },
    accountText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Navbar;
