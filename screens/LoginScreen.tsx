import { Button, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, View } from 'react-native';
import TextInputField from '../components/TextInputField';
import { login } from '../utils/api';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.success) {
      Alert.alert('Login Success', 'Welcome!');
      // Navigate to the next screen here
    } else {
      Alert.alert('Login Failed', result.message || 'Unknown error');
    }
  };

  // Always show modal for /login
  return (
    <Modal
      visible={true}
      animationType="slide"
      transparent={true}
      statusBarTranslucent
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text h3 style={{ marginBottom: 24, alignSelf: 'center', textAlign: 'center' }}>BCPC-CMS</Text>
          <TextInputField
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInputField
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button
            title="Login"
            onPress={handleLogin}
            loading={loading}
            disabled={loading}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 450,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default LoginScreen;