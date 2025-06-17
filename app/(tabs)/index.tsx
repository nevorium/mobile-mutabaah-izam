import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus, BookOpen, Clock, Target, TrendingUp } from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface HabitEntry {
  id: string;
  type: 'quran' | 'prayer' | 'dhikr' | 'dua';
  title: string;
  completed: boolean;
  streak: number;
  target: number;
  current: number;
}

export default function Dashboard() {
  const [todayHabits, setTodayHabits] = useState<HabitEntry[]>([
    {
      id: '1',
      type: 'quran',
      title: 'Quran Reading',
      completed: false,
      streak: 7,
      target: 30,
      current: 15,
    },
    {
      id: '2',
      type: 'prayer',
      title: 'Daily Prayers',
      completed: true,
      streak: 12,
      target: 5,
      current: 5,
    },
    {
      id: '3',
      type: 'dhikr',
      title: 'Morning Dhikr',
      completed: false,
      streak: 3,
      target: 100,
      current: 45,
    },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleHabit = (id: string) => {
    setTodayHabits(prev =>
      prev.map(habit =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
  };

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    if (hour < 21) return 'Good Evening';
    return 'Good Night';
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const completedHabits = todayHabits.filter(habit => habit.completed).length;
  const totalHabits = todayHabits.length;
  const overallProgress = (completedHabits / totalHabits) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{getGreeting()}</Text>
            <Text style={styles.subtitle}>Continue your spiritual journey</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{formatTime(currentTime)}</Text>
            <Text style={styles.date}>
              {currentTime.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </Text>
          </View>
        </View>

        {/* Progress Ring */}
        <View style={styles.progressSection}>
          <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={styles.progressCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.progressContent}>
              <View style={styles.progressRing}>
                <View style={[styles.progressFill, { width: `${overallProgress}%` }]} />
              </View>
              <Text style={styles.progressText}>{Math.round(overallProgress)}%</Text>
              <Text style={styles.progressLabel}>Today's Progress</Text>
              <Text style={styles.progressSubtext}>
                {completedHabits} of {totalHabits} habits completed
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Plus color="#667eea" size={24} />
              <Text style={styles.actionText}>Add Entry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <BookOpen color="#667eea" size={24} />
              <Text style={styles.actionText}>Read Quran</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Target color="#667eea" size={24} />
              <Text style={styles.actionText}>Set Goal</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Today's Habits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Habits</Text>
          {todayHabits.map((habit) => (
            <TouchableOpacity
              key={habit.id}
              style={[
                styles.habitCard,
                habit.completed && styles.habitCardCompleted,
              ]}
              onPress={() => toggleHabit(habit.id)}
            >
              <View style={styles.habitHeader}>
                <View style={styles.habitInfo}>
                  <Text style={[
                    styles.habitTitle,
                    habit.completed && styles.habitTitleCompleted,
                  ]}>
                    {habit.title}
                  </Text>
                  <Text style={styles.habitStreak}>
                    🔥 {habit.streak} day streak
                  </Text>
                </View>
                <View style={[
                  styles.checkbox,
                  habit.completed && styles.checkboxCompleted,
                ]}>
                  {habit.completed && <Text style={styles.checkmark}>✓</Text>}
                </View>
              </View>
              
              <View style={styles.habitProgress}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressBarFill,
                      { width: `${getProgressPercentage(habit.current, habit.target)}%` },
                    ]}
                  />
                </View>
                <Text style={styles.progressNumbers}>
                  {habit.current}/{habit.target}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Inspiration */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Inspiration</Text>
          <View style={styles.inspirationCard}>
            <Text style={styles.inspirationText}>
              "And whoever relies upon Allah - then He is sufficient for him. 
              Indeed, Allah will accomplish His purpose."
            </Text>
            <Text style={styles.inspirationSource}>- Quran 65:3</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  date: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  progressSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  progressCard: {
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
  },
  progressContent: {
    alignItems: 'center',
  },
  progressRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressFill: {
    height: 8,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    position: 'absolute',
    top: 56,
    left: 10,
  },
  progressText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  progressLabel: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  progressSubtext: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.7,
    marginTop: 5,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginTop: 8,
  },
  habitCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  habitCardCompleted: {
    backgroundColor: '#f0f9ff',
    borderColor: '#3b82f6',
    borderWidth: 1,
  },
  habitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  habitInfo: {
    flex: 1,
  },
  habitTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  habitTitleCompleted: {
    color: '#3b82f6',
  },
  habitStreak: {
    fontSize: 14,
    color: '#f59e0b',
    marginTop: 4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  habitProgress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginRight: 12,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  progressNumbers: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  inspirationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inspirationText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  inspirationSource: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
  },
});