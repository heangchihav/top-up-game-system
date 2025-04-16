import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, Button } from 'react-native';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcherButton';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import UserProfile from './userProfile';
import { Colors } from '@/constants/Colors';
import LoginSignupModal from './LoginSignupModal';
import { LinearGradient } from 'expo-linear-gradient';
const Navbar: React.FC = () => {
    const { isDark } = useTheme();
    const [visible, setVisible] = useState(false);
    type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
    const navigation = useNavigation<NavigationProp>();
    return (
        <LinearGradient
            colors={['#0d2c61', '#7ea4cb']} // dark to light blue
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.navbar}
        >

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
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('contact')}>
                    <Text style={styles.menuText}>Contact</Text>
                </TouchableOpacity>
            </View>

            {/* Right: Avatar / Theme */}
            <View style={styles.rightSection}>

                <ThemeSwitcher />
                <LanguageSwitcher />
                <View style={{}}>
                    <LoginSignupModal visible={visible} onClose={() => setVisible(false)} />
                    <TouchableOpacity onPress={() => setVisible(true)} style={styles.loginButton}>
                        <Text style={styles.loginText}>LOGIN | SIGNUP</Text>
                        <View style={styles.avatarWrapper}>
                            <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <UserProfile /> */}
            </View>
        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 4,
        padding: 2,
        backdropFilter: Platform.OS === 'web' ? 'blur(10px)' : undefined,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,
        paddingHorizontal: 10,
        borderColor: '#9bbde0',
    },

    shadowContainer: {
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 8,
    },
    loginButton: {
        borderWidth: 3,
        borderColor: Colors.secondary,
        backgroundColor: Colors.yellow,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 50,
    },
    loginText: {
        fontSize: 14,
        color: Colors.primarry,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    avatarWrapper: {
        borderRadius: 50,
        borderWidth: 3,
        borderColor: Colors.yellow,

    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 18,
    },

    leftSection: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '30%'
    },
    logo: {
        width: 140,
        height: 50,
        resizeMode: 'contain',
    },
    centerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        width: '40%'
    },
    menuItem: {
        marginHorizontal: 8,
    },
    menuText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.dark.text,
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'flex-end',
        width: '30%'
    },
});

export default Navbar;
