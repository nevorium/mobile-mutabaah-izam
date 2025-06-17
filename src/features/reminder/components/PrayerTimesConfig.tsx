import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../../app/store/slices/reminderSlice';
import { useTheme } from '../../../theme';

export default function PrayerTimesConfig() {
  const dispatch = useDispatch();
  const { location } = useSelector((state: any) => state.reminder);
  const { colors } = useTheme();
  // Location picker logic here
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lokasi Waktu Shalat</Text>
      <TouchableOpacity style={styles.picker} onPress={() => {/* open location picker */}}>
        <Text>{location ? location.name : 'Pilih Lokasi'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  picker: { borderWidth: 1, borderColor: '#eee', borderRadius: 8, padding: 12 },
});
