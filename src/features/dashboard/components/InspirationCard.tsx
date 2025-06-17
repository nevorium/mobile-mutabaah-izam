import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Dimensions, View, Text } from 'react-native';
import { useTheme } from '../../../theme';

const { width } = Dimensions.get('window');

export default function InspirationCard({ data = [], autoRotate = true, interval = 6000 }) {
  const { colors, typography } = useTheme();
  const index = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      Animated.timing(index, {
        toValue: (index._value + 1) % data.length,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, interval);
    return () => clearInterval(timer);
  }, [data.length, autoRotate, interval]);
  const current = Math.floor(index._value) % data.length;
  if (!data.length) return null;
  return (
    <Animated.View style={[styles.card, { backgroundColor: colors.card, width: width - 48 }]}> 
      <Text style={[styles.text, { fontFamily: typography.fontFamily.arabic }]}>{data[current]?.text}</Text>
      <Text style={styles.source}>{data[current]?.source}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 24,
    marginVertical: 12,
    elevation: 2,
    alignSelf: 'center',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
  },
  source: {
    fontSize: 14,
    textAlign: 'right',
    color: '#888',
  },
});
