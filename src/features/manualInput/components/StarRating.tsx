import React from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StarRating({ rating, onRate }) {
  return (
    <View style={styles.row}>
      {[1, 2, 3, 4, 5].map(i => (
        <TouchableOpacity key={i} onPress={() => onRate(i)}>
          <Animated.View style={{ transform: [{ scale: rating === i ? 1.2 : 1 }] }}>
            <Ionicons
              name={rating >= i ? 'star' : 'star-outline'}
              size={32}
              color={rating >= i ? '#FFD700' : '#ccc'}
            />
          </Animated.View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
  },
});
