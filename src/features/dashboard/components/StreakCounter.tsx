import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '../../../theme';

export default function StreakCounter({ streak = 5 }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/lottie/fire.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Text style={[styles.streak, { color: colors.gold }]}>{streak} Hari Streak</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  lottie: {
    width: 40,
    height: 40,
  },
  streak: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
