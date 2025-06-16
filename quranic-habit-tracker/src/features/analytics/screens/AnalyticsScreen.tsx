import React, { useEffect } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProgressLineChart from '../components/ProgressLineChart';
import WeeklyBarChart from '../components/WeeklyBarChart';
import ActivityPieChart from '../components/ActivityPieChart';
import TrendAreaChart from '../components/TrendAreaChart';
import ActivityHeatmap from '../components/ActivityHeatmap';
import StatCard from '../components/StatCard';
import ProgressIndicator from '../components/ProgressIndicator';
import { setPeriod, setData, setLoading, setError } from '../../../app/store/slices/analyticsSlice';
import { useTheme } from '../../../theme';

const periods = ['7D', '30D', '90D', '1Y'];

export default function AnalyticsScreen() {
  const dispatch = useDispatch();
  const { data, loading, error, period } = useSelector((state: any) => state.analytics);
  const { colors } = useTheme();

  useEffect(() => {
    dispatch(setLoading(true));
    // Fetch and process analytics data here, then dispatch setData
    setTimeout(() => {
      dispatch(setData({
        line: [{ date: '2025-06-10', value: 3 }, { date: '2025-06-11', value: 5 }],
        bar: [{ label: 'Mon', value: 3 }, { label: 'Tue', value: 5 }],
        pie: [{ label: 'Tilawah', value: 10 }, { label: 'Murojaah', value: 5 }],
        area: [{ label: 'Jun', value: 20 }, { label: 'Jul', value: 30 }],
        heatmap: [{ date: '2025-06-10', value: 2 }, { date: '2025-06-11', value: 4 }],
        stats: [
          { label: 'Total Aktivitas', value: 120 },
          { label: 'Streak Terpanjang', value: 15 },
        ],
        progress: 80,
      }));
    }, 1000);
  }, [dispatch, period]);

  if (loading) return <ActivityIndicator color={colors.greenGradient[0]} style={{ marginTop: 40 }} />;
  if (error) return <Text style={{ color: 'red', margin: 24 }}>{error}</Text>;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={styles.container}>
      <View style={styles.periodRow}>
        {periods.map(p => (
          <TouchableOpacity key={p} onPress={() => dispatch(setPeriod(p))}>
            <Text style={[styles.period, period === p && { color: colors.greenGradient[0], fontWeight: 'bold' }]}>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.statsRow}>
        {data.stats?.map((s, i) => <StatCard key={i} {...s} />)}
      </View>
      <ProgressIndicator percent={data.progress || 0} label="Goal Progress" />
      <ProgressLineChart data={data.line || []} />
      <WeeklyBarChart data={data.bar || []} />
      <ActivityPieChart data={data.pie || []} />
      <TrendAreaChart data={data.area || []} />
      <ActivityHeatmap data={data.heatmap || []} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 32 },
  periodRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 12 },
  period: { marginHorizontal: 8, fontSize: 15 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
});
