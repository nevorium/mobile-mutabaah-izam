import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme';

export default function Divider({ style }) {
  const { colors } = useTheme();
  return <View style={[styles.divider, { backgroundColor: colors.border }, style]} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    marginVertical: 8,
  },
});
