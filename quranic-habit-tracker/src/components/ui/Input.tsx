import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../../theme';

export default function Input({ style, ...props }) {
  const { colors, typography, spacing } = useTheme();
  return (
    <TextInput
      style={[styles.input, { fontFamily: typography.fontFamily.regular, padding: spacing.sm, borderColor: colors.border }, style]}
      placeholderTextColor={colors.text + '99'}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
});
