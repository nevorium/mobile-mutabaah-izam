import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export default function AchievementBadges({ badges }) {
  const { colors } = useTheme();
  return (
    <View style={styles.row}>
      {badges.map((b, i) => (
        <View key={i} style={[styles.badge, { backgroundColor: colors.gold }]}>
          <Text style={styles.text}>{b}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', marginTop: 4 },
  badge: { borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2, marginRight: 4 },
  text: { color: '#fff', fontSize: 12 },
});
