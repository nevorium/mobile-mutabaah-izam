import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export default function AchievementDetails({ badge }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { borderColor: colors.gold }]}> 
      <Text style={styles.title}>{badge.title}</Text>
      <Text style={styles.rarity}>{badge.rarity}</Text>
      <Text style={styles.desc}>{badge.description}</Text>
      <Text style={styles.req}>Syarat: {badge.requirements}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderWidth: 2, borderRadius: 16, padding: 16, margin: 8, backgroundColor: '#fff' },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  rarity: { fontSize: 13, color: '#FFD700', marginBottom: 4 },
  desc: { fontSize: 13, color: '#888', marginBottom: 4 },
  req: { fontSize: 12, color: '#222' },
});
