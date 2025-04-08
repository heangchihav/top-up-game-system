import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcherButton';
import AvatarModal from './AvatarModal';
import SmallScreenNav from './SmallScreenNav';

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
            <View style={styles.rightSection}>
                <AvatarModal />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    leftSection: {
        justifyContent: 'center',
    },
    centerSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuItem: {
        marginHorizontal: 10,
    },
    menuText: {
        fontSize: 16,
        color: '#333',
    },

});

export default Navbar;
