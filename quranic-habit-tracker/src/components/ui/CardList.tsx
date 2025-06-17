import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';

export default function CardList({ children, style }) {
  const { spacing } = useTheme();
  return <View style={[styles.list, { gap: spacing.md }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    flexDirection: 'column',
  },
});
