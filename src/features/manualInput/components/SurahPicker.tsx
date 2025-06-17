import React, { useState } from 'react';
import { Modal, View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from '../../../theme';

export default function SurahPicker({ visible, onSelect, onClose }) {
  const { surahList } = useSelector((state: any) => state.surah);
  const [search, setSearch] = useState('');
  const { colors } = useTheme();
  const filtered = surahList.filter((s: any) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Cari Surah..."
          value={search}
          onChangeText={setSearch}
          style={[styles.input, { borderColor: colors.border }]}
        />
        <FlatList
          data={filtered}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { onSelect(item); onClose(); }} style={styles.item}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Text style={{ color: colors.greenGradient[0] }}>Tutup</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  closeBtn: {
    marginTop: 16,
    alignSelf: 'center',
  },
});
