import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';
import { Ionicons } from '@expo/vector-icons';

const actions = [
  { label: 'Mulai Mengaji', icon: 'book' },
  { label: 'Quick Murojaah', icon: 'repeat' },
  { label: 'Input Manual', icon: 'create' },
];

export default function QuickActionGrid({ onAction }) {
  const { colors } = useTheme();
  return (
    <View style={styles.grid}>
      {actions.map((a, i) => (
        <TouchableOpacity
          key={a.label}
          style={[styles.action, { backgroundColor: colors.greenGradient[0] }]}
          onPress={() => onAction && onAction(a.label)}
        >
          <Ionicons name={a.icon} size={28} color="#fff" />
          <Text style={styles.label}>{a.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  action: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 16,
    alignItems: 'center',
    padding: 16,
    elevation: 2,
  },
  label: {
    color: '#fff',
    marginTop: 8,
    fontWeight: 'bold',
  },
});
