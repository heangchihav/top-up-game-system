import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const LoginSignupModal: React.FC<Props> = ({ visible, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.blurWrapper}>
          <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.modalCenter}>
              <TouchableWithoutFeedback onPress={() => { }}>
                <View style={styles.modalBox}>

                  {/* Close Button (Top Right) */}
                  <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Ionicons name="close" size={24} color="#333" />
                  </TouchableOpacity>

                  {/* Icon */}
                  <Image
                    source={{ uri: 'https://i.imgur.com/QnX5mel.png' }}
                    style={styles.icon}
                  />

                  <Text style={styles.title}>{isLogin ? 'LOGIN NOW' : 'SIGN UP'}</Text>

                  {/* Username */}
                  <View style={styles.inputWrapper}>
                    <FontAwesome name="user" size={20} color="#888" style={styles.iconInput} />
                    <TextInput
                      placeholder="Username"
                      value={username}
                      onChangeText={setUsername}
                      style={styles.input}
                      placeholderTextColor="#666"
                    />
                  </View>

                  {/* Password */}
                  <View style={styles.inputWrapper}>
                    <MaterialIcons name="lock-outline" size={20} color="#888" style={styles.iconInput} />
                    <TextInput
                      placeholder="Password"
                      value={password}
                      onChangeText={setPassword}
                      style={styles.input}
                      secureTextEntry
                      placeholderTextColor="#666"
                    />
                  </View>

                  {/* Switch to sign up / login */}
                  <View style={styles.switchText}>
                    <Text style={styles.text}>
                      {isLogin ? 'no have an account?' : 'Already have an account?'}
                    </Text>
                    <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                      <Text style={styles.link}>{isLogin ? ' sign up' : ' login'}</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Submit Button */}
                  <TouchableOpacity style={styles.submitButton}>
                    <LinearGradient
                      colors={['#0072ff', '#00c6ff']}
                      style={styles.gradient}
                    >
                      <Text style={styles.submitText}>Submit</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  {/* Divider */}
                  <Text style={styles.or}>────────── or ──────────</Text>

                  {/* Google Login */}
                  <TouchableOpacity style={styles.googleButton}>
                    <Image
                      source={{ uri: 'https://i.imgur.com/qaTnbcx.png' }}
                      style={styles.googleIcon}
                    />
                    <Text style={styles.googleText}>Continue with Google</Text>
                  </TouchableOpacity>

                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LoginSignupModal;

const styles = StyleSheet.create({
  blurWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
  modalCenter: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  modalBox: {
    backgroundColor: '#f3f8f6',
    borderRadius: 20,
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
    maxWidth: 500,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    padding: 4,
  },
  icon: {
    width: 500,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d4dfe7',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
    width: '100%',
  },
  iconInput: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  switchText: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  text: {
    color: '#444',
  },
  link: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  submitButton: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  gradient: {
    padding: 12,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  or: {
    marginVertical: 10,
    color: '#888',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  googleText: {
    marginLeft: 10,
    color: '#333',
  },
});
