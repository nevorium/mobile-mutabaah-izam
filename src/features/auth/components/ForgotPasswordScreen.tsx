import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export default function ForgotPasswordScreen() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <Text style={styles.title}>Forgot Password</Text>
      {/* Tambahkan form reset password di sini */}
      <Text>Form reset password belum diimplementasikan.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
});
