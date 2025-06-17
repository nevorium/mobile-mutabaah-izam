import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory-native';
import { useTheme } from '../../../theme';

export default function ProgressLineChart({ data }) {
  const { colors } = useTheme();
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      height={220}
      padding={{ left: 40, right: 20, top: 20, bottom: 40 }}
      containerComponent={<VictoryVoronoiContainer />}
    >
      <VictoryLine
        data={data}
        x="date"
        y="value"
        style={{ data: { stroke: colors.greenGradient[0], strokeWidth: 3 } }}
        labels={({ datum }) => datum.value}
        labelComponent={<VictoryTooltip />}
      />
    </VictoryChart>
  );
}
