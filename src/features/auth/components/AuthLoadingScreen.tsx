import React from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';

export default function AuthLoadingScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/splash-icon.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#27ae60" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(180deg, #43cea2 0%, #185a9d 100%)',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
});
