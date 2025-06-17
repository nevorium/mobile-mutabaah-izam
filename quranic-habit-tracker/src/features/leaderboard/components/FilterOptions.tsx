import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export default function FilterOptions({ period, category, onPeriodChange, onCategoryChange }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Periode:</Text>
      <Text style={[styles.option, period === 'weekly' && { color: colors.greenGradient[0] }]} onPress={() => onPeriodChange('weekly')}>Weekly</Text>
      <Text style={[styles.option, period === 'monthly' && { color: colors.greenGradient[0] }]} onPress={() => onPeriodChange('monthly')}>Monthly</Text>
      <Text style={[styles.option, period === 'all-time' && { color: colors.greenGradient[0] }]} onPress={() => onPeriodChange('all-time')}>All-time</Text>
      <Text style={styles.label}>Kategori:</Text>
      <Text style={[styles.option, category === 'totalAyat' && { color: colors.gold }]} onPress={() => onCategoryChange('totalAyat')}>Total Ayat</Text>
      <Text style={[styles.option, category === 'consistency' && { color: colors.gold }]} onPress={() => onCategoryChange('consistency')}>Consistency</Text>
      <Text style={[styles.option, category === 'streaks' && { color: colors.gold }]} onPress={() => onCategoryChange('streaks')}>Streaks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginVertical: 8 },
  label: { fontWeight: 'bold', marginRight: 8 },
  option: { marginRight: 12, fontSize: 15 },
});
