import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginAnonymously, googleSignIn, getGoogleAuthRequest } from '../services/firebaseAuth';
import { setLoading, setError, setUser } from '../../../app/store/slices/authSlice';
import * as WebBrowser from 'expo-web-browser';
import { COLORS } from '../../../constants';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [request, response, promptAsync] = getGoogleAuthRequest();

  const handleLogin = async () => {
    dispatch(setLoading(true));
    try {
      const userCredential = await login(email, password);
      dispatch(setUser(userCredential.user));
    } catch (e: any) {
      dispatch(setError(e.message));
    }
    dispatch(setLoading(false));
  };

  const handleGoogleLogin = async () => {
    dispatch(setLoading(true));
    try {
      const result = await promptAsync();
      if (result?.type === 'success') {
        await googleSignIn(result.authentication.idToken);
      }
    } catch (e: any) {
      dispatch(setError(e.message));
    }
    dispatch(setLoading(false));
  };

  const handleAnonymous = async () => {
    dispatch(setLoading(true));
    try {
      const userCredential = await loginAnonymously();
      dispatch(setUser(userCredential.user));
    } catch (e: any) {
      dispatch(setError(e.message));
    }
    dispatch(setLoading(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quranic Habit Tracker</Text>
      <Text style={styles.subtitle}>Login to your account</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.anonButton} onPress={handleAnonymous}>
        <Text style={styles.buttonText}>Try as Guest</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'linear-gradient(180deg, #43cea2 0%, #185a9d 100%)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#185a9d',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#27ae60',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  anonButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#888',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  link: {
    marginVertical: 4,
  },
  linkText: {
    color: '#185a9d',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});
