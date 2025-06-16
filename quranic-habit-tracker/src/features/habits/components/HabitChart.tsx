// src/features/habits/components/HabitChart.tsx
import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { View } from 'react-native';

const data = [
  { day: 'Mon', habits: 3 },
  { day: 'Tue', habits: 2 },
  { day: 'Wed', habits: 4 },
  { day: 'Thu', habits: 1 },
  { day: 'Fri', habits: 5 },
  { day: 'Sat', habits: 2 },
  { day: 'Sun', habits: 3 },
];

export default function HabitChart() {
  return (
    <View>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryBar data={data} x="day" y="habits" />
      </VictoryChart>
    </View>
  );
}
