import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFollowing, removeFollowing } from '../../../app/store/slices/followSlice';
import { useTheme } from '../../../theme';

export default function FollowButton({ userId }) {
  const dispatch = useDispatch();
  const { following } = useSelector((state: any) => state.follow);
  const { colors } = useTheme();
  const isFollowing = following.includes(userId);
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: isFollowing ? colors.gold : colors.greenGradient[0] }]}
      onPress={() => dispatch(isFollowing ? removeFollowing(userId) : addFollowing(userId))}
    >
      <Text style={styles.text}>{isFollowing ? 'Following' : 'Follow'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginLeft: 8,
  },
  text: { color: '#fff', fontWeight: 'bold' },
});
