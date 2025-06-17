import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../../../theme';
import FollowButton from './FollowButton';

export default function UserRankCard({ user, rank }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { borderColor: colors.greenGradient[0] }]}> 
      <Text style={styles.rank}>#{rank}</Text>
      <Image source={{ uri: user.photoURL }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{user.displayName}</Text>
        <Text style={styles.stats}>{user.stats}</Text>
        <View style={styles.badges}>{/* Render badges here */}</View>
      </View>
      <FollowButton userId={user.userId} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 16,
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#fff',
  },
  rank: { fontSize: 20, fontWeight: 'bold', width: 36, textAlign: 'center' },
  avatar: { width: 48, height: 48, borderRadius: 24, marginHorizontal: 8 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  stats: { fontSize: 13, color: '#888' },
  badges: { flexDirection: 'row', marginTop: 4 },
});
