import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export default function StepProgressIndicator({ step, total }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[styles.dot, { backgroundColor: i <= step ? colors.greenGradient[0] : colors.border }]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  dot: {
    width: 18,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
