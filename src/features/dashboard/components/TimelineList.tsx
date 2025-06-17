import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';

export default function TimelineList({ data = [] }) {
  const { colors } = useTheme();
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={[styles.item, { borderLeftColor: item.done ? colors.greenGradient[0] : colors.gold }]}> 
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.status, { color: item.done ? colors.greenGradient[0] : colors.gold }]}>
            {item.done ? 'Selesai' : 'Belum'}
          </Text>
        </View>
      )}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 12,
  },
  item: {
    borderLeftWidth: 4,
    paddingLeft: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 1,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 13,
    marginTop: 2,
  },
});
