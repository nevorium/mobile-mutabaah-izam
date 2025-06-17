import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../../../theme';

const periods = ['Weekly', 'Monthly', 'All-time'];
const categories = [
  { label: 'Total Ayat', value: 'totalAyat' },
  { label: 'Consistency', value: 'consistency' },
  { label: 'Streaks', value: 'streaks' },
];

export default function LeaderboardTabs({ period, category, onPeriodChange, onCategoryChange }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
        {periods.map(p => (
          <TouchableOpacity key={p} onPress={() => onPeriodChange(p.toLowerCase())}>
            <Text style={[styles.tab, period === p.toLowerCase() && { color: colors.greenGradient[0], fontWeight: 'bold' }]}>{p}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
        {categories.map(c => (
          <TouchableOpacity key={c.value} onPress={() => onCategoryChange(c.value)}>
            <Text style={[styles.tab, category === c.value && { color: colors.gold, fontWeight: 'bold' }]}>{c.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  row: { flexDirection: 'row', marginVertical: 4 },
  tab: { marginHorizontal: 12, fontSize: 16 },
});
