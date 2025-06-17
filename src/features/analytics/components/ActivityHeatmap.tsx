import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { useTheme } from '../../../theme';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const { width } = Dimensions.get('window');

export default function ActivityHeatmap({ data }) {
  const { colors } = useTheme();
  // data: [{date: '2025-06-01', value: 2}, ...]
  // Map to grid: 7 cols (days), N rows (weeks)
  const grid = Array(6).fill(0).map(() => Array(7).fill(0));
  data.forEach(d => {
    const date = new Date(d.date);
    const week = Math.floor(date.getDate() / 7);
    const day = date.getDay();
    grid[week][day] = d.value;
  });
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {days.map(day => (
          <Text key={day} style={styles.day}>{day}</Text>
        ))}
      </View>
      {grid.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((val, j) => (
            <View
              key={j}
              style={[styles.cell, { backgroundColor: val ? colors.greenGradient[0] : '#eee', opacity: 0.3 + 0.7 * (val / 5) }]}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const cellSize = Math.floor((width - 48) / 7);
const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  row: { flexDirection: 'row' },
  day: { width: cellSize, textAlign: 'center', color: '#888', fontSize: 12, marginBottom: 2 },
  cell: { width: cellSize, height: cellSize, margin: 1, borderRadius: 4 },
});
