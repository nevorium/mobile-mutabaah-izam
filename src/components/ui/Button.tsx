import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';

export default function Button({ title, onPress, style, ...props }) {
  const { colors, typography, spacing } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.greenGradient[0], padding: spacing.md }, style]}
      onPress={onPress}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={[styles.text, { fontFamily: typography.fontFamily.bold }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
