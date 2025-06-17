import React from 'react';
import { View, Switch, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setEnabled, setPrayerReminders, setDnd } from '../../../app/store/slices/reminderSlice';
import { useTheme } from '../../../theme';

export default function ReminderSettings() {
  const dispatch = useDispatch();
  const { enabled, prayerReminders, dnd } = useSelector((state: any) => state.reminder);
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan Reminder</Text>
      <View style={styles.row}>
        <Text>Aktifkan Reminder</Text>
        <Switch value={enabled} onValueChange={v => dispatch(setEnabled(v))} />
      </View>
      <View style={styles.row}>
        <Text>Reminder Waktu Shalat</Text>
        <Switch value={prayerReminders} onValueChange={v => dispatch(setPrayerReminders(v))} />
      </View>
      <View style={styles.row}>
        <Text>Do Not Disturb</Text>
        <Switch value={dnd} onValueChange={v => dispatch(setDnd(v))} />
      </View>
      {/* Add more settings and pickers here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 12 },
});
