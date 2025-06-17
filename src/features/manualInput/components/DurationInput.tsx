import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '../../../theme';

export default function DurationInput({ value, onChange, timerMode = false }) {
  const { colors } = useTheme();
  const [timer, setTimer] = useState(0);
  // Timer logic can be added here
  return (
    <View style={styles.container}>
      <Text>Durasi (menit)</Text>
      <TextInput
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
        style={[styles.input, { borderColor: colors.border }]}
      />
      {/* Timer mode toggle and timer logic can be added here */}
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
    marginTop: 8,
    width: 100,
  },
});
