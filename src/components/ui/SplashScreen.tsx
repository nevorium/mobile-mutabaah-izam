import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme';

export default function SplashScreen() {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {/* Custom Islamic logo or illustration here */}
      <ActivityIndicator size="large" color={colors.greenGradient[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
