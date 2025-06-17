import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import { useTheme } from '../../../theme';

export default function WeeklyBarChart({ data }) {
  const { colors } = useTheme();
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20} height={200}>
      <VictoryAxis style={{ tickLabels: { fontSize: 12 } }} />
      <VictoryBar
        data={data}
        x="label"
        y="value"
        style={{ data: { fill: colors.greenGradient[0] } }}
        labels={({ datum }) => datum.value}
      />
    </VictoryChart>
  );
}
