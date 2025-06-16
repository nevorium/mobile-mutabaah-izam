import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function CelebrationModal({ visible, badge, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <LottieView source={require('../../../assets/lottie/celebration.json')} autoPlay loop={false} style={styles.lottie} />
          <Text style={styles.title}>Achievement Unlocked!</Text>
          <Text style={styles.badge}>{badge?.title}</Text>
          <Text style={styles.rarity}>{badge?.rarity}</Text>
          <Text style={styles.close} onPress={onClose}>Tutup</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: '#0008', justifyContent: 'center', alignItems: 'center' },
  modal: { backgroundColor: '#fff', borderRadius: 24, padding: 32, alignItems: 'center' },
  lottie: { width: 120, height: 120 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 8 },
  badge: { fontSize: 16, fontWeight: 'bold', marginVertical: 4 },
  rarity: { fontSize: 13, color: '#FFD700', marginBottom: 8 },
  close: { color: '#38ef7d', marginTop: 16, fontWeight: 'bold' },
});
