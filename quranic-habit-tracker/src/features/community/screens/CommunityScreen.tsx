import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Community Screen (Coming Soon)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default CommunityScreen;
