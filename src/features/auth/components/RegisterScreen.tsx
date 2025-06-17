import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../services/firebaseAuth';
import { setLoading, setError, setUser } from '../../../app/store/slices/authSlice';
import { COLORS } from '../../../constants';

export default function RegisterScreen({ navigation }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.auth);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleNext = () => {
    if (step === 1 && (!email || !password || password !== confirmPassword)) {
      dispatch(setError('Please fill all fields and make sure passwords match.'));
      return;
    }
    setStep(step + 1);
  };

  const handleRegister = async () => {
    dispatch(setLoading(true));
    try {
      const userCredential = await register(email, password);
      dispatch(setUser({ ...userCredential.user, name, target, timezone, isFirstTime: true }));
    } catch (e: any) {
      dispatch(setError(e.message));
    }
    dispatch(setLoading(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {step === 1 && (
        <>
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
          <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </>
      )}
      {step === 2 && (
        <>
          <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
          <TextInput style={styles.input} placeholder="Daily Target (e.g. 1 Juz)" value={target} onChangeText={setTarget} />
          <TextInput style={styles.input} placeholder="Timezone (e.g. Asia/Jakarta)" value={timezone} onChangeText={setTimezone} />
          <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Register</Text>}
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
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
