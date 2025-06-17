import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme';

export default function ThemedView({ children, style }) {
  const { colors } = useTheme();
  return <View style={[styles.view, { backgroundColor: colors.background }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 16,
  },
});
