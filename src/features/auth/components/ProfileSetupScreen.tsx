import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export default function ProfileSetupScreen() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <Text style={styles.title}>Profile Setup</Text>
      {/* Tambahkan form setup profil di sini */}
      <Text>Form setup profil belum diimplementasikan.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
});
