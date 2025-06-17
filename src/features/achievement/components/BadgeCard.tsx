import React from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../../../theme';

export default function BadgeCard({ badge, unlocked }) {
  const { colors } = useTheme();
  // Animated reveal logic can be added here
  return (
    <Animated.View style={[styles.card, { opacity: unlocked ? 1 : 0.5, borderColor: badge.rarityColor }]}> 
      <Image source={{ uri: badge.image }} style={styles.image} />
      <Text style={styles.title}>{badge.title}</Text>
      <Text style={[styles.rarity, { color: badge.rarityColor }]}>{badge.rarity}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 16,
    padding: 8,
    margin: 6,
    alignItems: 'center',
    width: 100,
    backgroundColor: '#fff',
  },
  image: { width: 48, height: 48, marginBottom: 4 },
  title: { fontSize: 13, fontWeight: 'bold', textAlign: 'center' },
  rarity: { fontSize: 11, fontWeight: 'bold', marginTop: 2 },
});
