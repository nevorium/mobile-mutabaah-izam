import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomReminder, removeCustomReminder } from '../../../app/store/slices/reminderSlice';
import { useTheme } from '../../../theme';

export default function CustomRemindersList() {
  const dispatch = useDispatch();
  const { customReminders } = useSelector((state: any) => state.reminder);
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Reminder</Text>
      <FlatList
        data={customReminders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.label} - {item.time}</Text>
            <TouchableOpacity onPress={() => dispatch(removeCustomReminder(item.id))}>
              <Text style={{ color: 'red' }}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addBtn} onPress={() => dispatch(addCustomReminder({ id: Date.now().toString(), label: 'Baru', time: '08:00' }))}>
        <Text style={{ color: colors.greenGradient[0] }}>+ Tambah Reminder</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8 },
  addBtn: { marginTop: 16, alignSelf: 'center' },
});
