import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import BadgeCard from './BadgeCard';

export default function AchievementGallery({ achievements, userAchievements }) {
  return (
    <FlatList
      data={achievements}
      keyExtractor={item => item.id}
      numColumns={3}
      renderItem={({ item }) => (
        <BadgeCard badge={item} unlocked={userAchievements.includes(item.id)} />
      )}
      contentContainerStyle={styles.grid}
    />
  );
}

const styles = StyleSheet.create({
  grid: { padding: 8 },
});
