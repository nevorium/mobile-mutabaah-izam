import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

const categories = [
  { label: 'Tilawah', value: 'tilawah' },
  { label: 'Murojaah', value: 'murojaah' },
  { label: 'Tahfidz', value: 'tahfidz' },
  { label: 'Tadabbur', value: 'tadabbur' },
];

export default function CategorySelector({ value, onSelect }) {
  const { colors } = useTheme();
  return (
    <View style={styles.row}>
      {categories.map(cat => (
        <TouchableOpacity
          key={cat.value}
          style={[styles.card, { borderColor: value === cat.value ? colors.greenGradient[0] : colors.border }]}
          onPress={() => onSelect(cat.value)}
        >
          <Text style={{ color: value === cat.value ? colors.greenGradient[0] : colors.text }}>{cat.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  card: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
});
