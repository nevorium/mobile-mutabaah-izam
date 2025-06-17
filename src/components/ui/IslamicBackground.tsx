import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { useTheme } from '../../theme';

export default function IslamicBackground({ children }) {
  const { colors } = useTheme();
  return (
    <ImageBackground
      source={require('../../assets/images/islamic-pattern.png')}
      style={styles.background}
      resizeMode="repeat"
    >
      <View style={[styles.overlay, { backgroundColor: colors.background + 'CC' }]}> 
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    padding: 0,
  },
});
