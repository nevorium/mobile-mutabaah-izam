import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme';
import * as Sharing from 'expo-sharing';

export default function ShareCard({ badge, onShare }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { borderColor: colors.gold }]}> 
      <Image source={{ uri: badge.image }} style={styles.image} />
      <Text style={styles.title}>{badge.title}</Text>
      <Text style={[styles.rarity, { color: badge.rarityColor }]}>{badge.rarity}</Text>
      <TouchableOpacity style={styles.shareBtn} onPress={onShare}>
        <Text style={{ color: colors.greenGradient[0], fontWeight: 'bold' }}>Bagikan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    margin: 8,
    backgroundColor: '#fff',
  },
  image: { width: 64, height: 64, marginBottom: 8 },
  title: { fontSize: 15, fontWeight: 'bold', textAlign: 'center' },
  rarity: { fontSize: 12, fontWeight: 'bold', marginTop: 2 },
  shareBtn: { marginTop: 12, padding: 8, borderRadius: 8, backgroundColor: '#F7F7F7' },
});
