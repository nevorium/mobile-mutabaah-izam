import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../../features/dashboard/screens/DashboardScreen';
import TrackingScreen from '../../features/tracking/screens/TrackingScreen';
import AnalyticsScreen from '../../features/analytics/screens/AnalyticsScreen';
import CommunityScreen from '../../features/community/screens/CommunityScreen';
import ProfileScreen from '../../features/profile/screens/ProfileScreen';
import { IslamicTabBar } from '../../components/ui/IslamicTabBar';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <IslamicTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Tracking" component={TrackingScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
