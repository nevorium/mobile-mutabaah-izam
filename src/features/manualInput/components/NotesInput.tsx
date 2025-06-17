import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useTheme } from '../../../theme';

export default function NotesInput({ value, onChange, maxLength = 300 }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text>Catatan (opsional)</Text>
      <TextInput
        style={[styles.input, { borderColor: colors.border }]}
        value={value}
        onChangeText={onChange}
        multiline
        maxLength={maxLength}
      />
      <Text style={styles.count}>{value.length}/{maxLength}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    minHeight: 60,
    backgroundColor: '#fff',
  },
  count: {
    alignSelf: 'flex-end',
    color: '#888',
    fontSize: 12,
    marginTop: 2,
  },
});
