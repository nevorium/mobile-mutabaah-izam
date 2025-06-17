import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, RefreshControl, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { onSnapshot, collection, query, orderBy, where } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../../../config/firebase';
import { setDashboardData, setLoading, setError } from '../../../app/store/slices/dashboardSlice';
import CircularProgress from './CircularProgress';
import StreakCounter from './StreakCounter';
import QuickActionGrid from './QuickActionGrid';
import InspirationCard from './InspirationCard';
import TimelineList from './TimelineList';
import ActivitySummary from './ActivitySummary';
import { useTheme } from '../../../theme';

export default function DashboardScreen() {
  const dispatch = useDispatch();
  const { progress, streak, inspiration, timeline, activity, loading, error } = useSelector(
    (state: any) => state.dashboard
  );
  const [refreshing, setRefreshing] = useState(false);
  const { colors } = useTheme();

  const fetchData = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      // Real-time Firestore listeners
      const unsub = onSnapshot(collection(db, 'dashboard'), (snapshot) => {
        const data = snapshot.docs[0]?.data() || {};
        dispatch(setDashboardData(data));
        AsyncStorage.setItem('dashboardCache', JSON.stringify(data));
      });
      return unsub;
    } catch (e) {
      dispatch(setError(e.message));
      // Offline fallback
      const cache = await AsyncStorage.getItem('dashboardCache');
      if (cache) dispatch(setDashboardData(JSON.parse(cache)));
    }
  }, [dispatch]);

  useEffect(() => {
    let unsub;
    fetchData().then(u => (unsub = u));
    return () => unsub && unsub();
  }, [fetchData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }, [fetchData]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      contentContainerStyle={styles.container}
    >
      <View style={styles.row}>
        <CircularProgress progress={progress} />
        <StreakCounter streak={streak} />
      </View>
      <QuickActionGrid onAction={label => {}} />
      <InspirationCard data={inspiration} />
      <TimelineList data={timeline} />
      <ActivitySummary data={activity} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
