import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme';

export default function ThemedText({ children, style, type = 'regular', ...props }) {
  const { typography, colors } = useTheme();
  let fontFamily = typography.fontFamily.regular;
  if (type === 'arabic') fontFamily = typography.fontFamily.arabic;
  if (type === 'bold') fontFamily = typography.fontFamily.bold;
  return (
    <Text style={[styles.text, { fontFamily, color: colors.text }, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
