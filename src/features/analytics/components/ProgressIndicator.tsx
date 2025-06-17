import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export default function ProgressIndicator({ percent, label }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${percent}%`, backgroundColor: colors.greenGradient[0] }]} />
      <Text style={styles.label}>{label} {percent}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  bar: {
    height: 16,
    borderRadius: 8,
  },
  label: {
    position: 'absolute',
    left: 12,
    top: 0,
    fontSize: 13,
    color: '#222',
    height: 16,
    lineHeight: 16,
  },
});
