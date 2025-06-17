import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { useTheme } from '../../../theme';

export default function ActivitySummary({ data = [] }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aktivitas Terakhir</Text>
      <VictoryChart theme={VictoryTheme.material} domainPadding={16}>
        <VictoryBar
          data={data}
          x="label"
          y="value"
          style={{ data: { fill: colors.greenGradient[0] } }}
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 12,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
