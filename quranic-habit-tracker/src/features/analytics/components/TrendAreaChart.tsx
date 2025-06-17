import React from 'react';
import { VictoryArea, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import { useTheme } from '../../../theme';

export default function TrendAreaChart({ data }) {
  const { colors } = useTheme();
  return (
    <VictoryChart theme={VictoryTheme.material} height={200} domainPadding={20}>
      <VictoryAxis style={{ tickLabels: { fontSize: 12 } }} />
      <VictoryArea
        data={data}
        x="label"
        y="value"
        style={{ data: { fill: colors.greenGradient[0], fillOpacity: 0.3, stroke: colors.greenGradient[0], strokeWidth: 2 } }}
      />
    </VictoryChart>
  );
}
