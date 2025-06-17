import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme';

export default function Card({ children, style }) {
  const { colors, spacing } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: colors.card, padding: spacing.md }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    marginVertical: 8,
  },
});
