import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';

export default function NotificationPermissions() {
  useEffect(() => {
    PushNotification.checkPermissions((permissions) => {
      // handle permissions
    });
  }, []);
  const requestPermission = () => {
    PushNotification.requestPermissions();
  };
  return (
    <View style={styles.container}>
      <Text>Izinkan Notifikasi</Text>
      <Button title="Request Permission" onPress={requestPermission} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, alignItems: 'center' },
});
