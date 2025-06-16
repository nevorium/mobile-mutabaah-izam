import React from 'react';
import { FlatList, View, StyleSheet, RefreshControl } from 'react-native';
import UserRankCard from './UserRankCard';

export default function RankingList({ data, onEndReached, refreshing, onRefresh }) {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.userId}
      renderItem={({ item, index }) => <UserRankCard user={item} rank={index + 1} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1 },
});
