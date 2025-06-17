import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';
import { Picker } from '@react-native-picker/picker';

export default function AyahRangePicker({ from, to, onChangeFrom, onChangeTo, maxAyah }) {
  const { colors } = useTheme();
  const ayahNumbers = Array.from({ length: maxAyah }, (_, i) => i + 1);
  return (
    <View style={styles.row}>
      <Text>Dari</Text>
      <Picker
        selectedValue={from}
        style={styles.picker}
        onValueChange={onChangeFrom}
      >
        {ayahNumbers.map(n => (
          <Picker.Item key={n} label={n.toString()} value={n} />
        ))}
      </Picker>
      <Text>Sampai</Text>
      <Picker
        selectedValue={to}
        style={styles.picker}
        onValueChange={onChangeTo}
      >
        {ayahNumbers.map(n => (
          <Picker.Item key={n} label={n.toString()} value={n} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  picker: {
    width: 80,
    marginHorizontal: 8,
  },
});
