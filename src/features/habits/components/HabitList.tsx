// src/features/habits/components/HabitList.tsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const dummyHabits = [
  { id: '1', name: 'Shalat Subuh', done: true },
  { id: '2', name: 'Tilawah Quran', done: false },
];

export default function HabitList() {
  return (
    <View>
      <FlatList
        data={dummyHabits}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginVertical: 4 }}>
            {item.name} {item.done ? '✅' : '❌'}
          </Text>
        )}
      />
    </View>
  );
}
