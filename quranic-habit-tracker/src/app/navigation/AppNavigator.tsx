// src/app/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from '../../../app/(tabs)/explore';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Explore" component={ExploreScreen} />
        {/* Tambahkan screen lain di sini */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
