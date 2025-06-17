import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export default function ChallengeCard({ challenge }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { borderColor: colors.gold }]}> 
      <Text style={styles.title}>{challenge.title}</Text>
      <Text style={styles.desc}>{challenge.description}</Text>
      <Text style={styles.status}>{challenge.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  desc: { fontSize: 13, color: '#888', marginVertical: 4 },
  status: { fontSize: 13, color: '#38ef7d', fontWeight: 'bold' },
});
