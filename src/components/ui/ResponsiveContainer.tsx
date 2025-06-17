import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';

export default function ResponsiveContainer({ children, style }) {
  const { spacing } = useTheme();
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
});
