import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../../theme';

export default function StatCard({ label, value, icon, color }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: color || colors.card }]}> 
      {icon}
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    margin: 8,
    elevation: 2,
    minWidth: 120,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 2,
  },
});
