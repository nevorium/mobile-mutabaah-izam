import React from 'react';
import { VictoryPie } from 'victory-native';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export default function ActivityPieChart({ data }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <VictoryPie
        data={data}
        x="label"
        y="value"
        colorScale={[colors.greenGradient[0], colors.gold, '#A3E635', '#FBBF24']}
        innerRadius={40}
        labelRadius={70}
        style={{ labels: { fontSize: 14 } }}
      />
      <View style={styles.legend}>
        {data.map((d, i) => (
          <View key={i} style={styles.legendRow}>
            <View style={[styles.dot, { backgroundColor: [colors.greenGradient[0], colors.gold, '#A3E635', '#FBBF24'][i] }]} />
            <Text>{d.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginVertical: 12 },
  legend: { flexDirection: 'row', marginTop: 8 },
  legendRow: { flexDirection: 'row', alignItems: 'center', marginRight: 12 },
  dot: { width: 12, height: 12, borderRadius: 6, marginRight: 4 },
});
