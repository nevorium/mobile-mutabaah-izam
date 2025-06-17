import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trophy, Star, Award, Target, Flame, BookOpen } from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  unlockedDate?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  category: 'quran' | 'prayer' | 'streak' | 'consistency' | 'milestone';
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  earned: boolean;
  earnedDate?: string;
}

export default function Achievements() {
  const [selectedTab, setSelectedTab] = useState<'achievements' | 'badges'>('achievements');

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Steps',
      description: 'Complete your first Quran reading session',
      icon: BookOpen,
      color: '#10b981',
      progress: 1,
      maxProgress: 1,
      unlocked: true,
      unlockedDate: '2024-01-15',
      rarity: 'common',
      category: 'quran',
    },
    {
      id: '2',
      title: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      icon: Flame,
      color: '#f59e0b',
      progress: 7,
      maxProgress: 7,
      unlocked: true,
      unlockedDate: '2024-01-22',
      rarity: 'rare',
      category: 'streak',
    },
    {
      id: '3',
      title: 'Prayer Master',
      description: 'Complete all 5 daily prayers for 30 days',
      icon: Target,
      color: '#3b82f6',
      progress: 22,
      maxProgress: 30,
      unlocked: false,
      rarity: 'epic',
      category: 'prayer',
    },
    {
      id: '4',
      title: 'Consistency Champion',
      description: 'Complete habits for 100 consecutive days',
      icon: Trophy,
      color: '#8b5cf6',
      progress: 45,
      maxProgress: 100,
      unlocked: false,
      rarity: 'legendary',
      category: 'consistency',
    },
    {
      id: '5',
      title: 'Quran Scholar',
      description: 'Read 1000 verses of the Quran',
      icon: BookOpen,
      color: '#06b6d4',
      progress: 650,
      maxProgress: 1000,
      unlocked: false,
      rarity: 'epic',
      category: 'quran',
    },
    {
      id: '6',
      title: 'Milestone Achiever',
      description: 'Reach 50 total habit completions',
      icon: Award,
      color: '#ef4444',
      progress: 50,
      maxProgress: 50,
      unlocked: true,
      unlockedDate: '2024-01-28',
      rarity: 'rare',
      category: 'milestone',
    },
  ];

  const badges: Badge[] = [
    {
      id: '1',
      name: 'Early Bird',
      description: 'Complete Fajr prayer 10 times',
      icon: '🌅',
      color: '#f59e0b',
      earned: true,
      earnedDate: '2024-01-20',
    },
    {
      id: '2',
      name: 'Night Owl',
      description: 'Complete Isha prayer 15 times',
      icon: '🌙',
      color: '#6366f1',
      earned: true,
      earnedDate: '2024-01-25',
    },
    {
      id: '3',
      name: 'Dhikr Master',
      description: 'Complete 1000 dhikr recitations',
      icon: '📿',
      color: '#10b981',
      earned: false,
    },
    {
      id: '4',
      name: 'Community Helper',
      description: 'Help 5 community members',
      icon: '🤝',
      color: '#8b5cf6',
      earned: false,
    },
  ];

  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return '#6b7280';
      case 'rare': return '#3b82f6';
      case 'epic': return '#8b5cf6';
      case 'legendary': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getRarityLabel = (rarity: Achievement['rarity']) => {
    return rarity.charAt(0).toUpperCase() + rarity.slice(1);
  };

  const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
    const progressPercentage = (achievement.progress / achievement.maxProgress) * 100;
    
    return (
      <TouchableOpacity
        style={[
          styles.achievementCard,
          achievement.unlocked && styles.achievementCardUnlocked,
        ]}
      >
        <View style={styles.achievementHeader}>
          <View style={[
            styles.achievementIcon,
            { backgroundColor: `${achievement.color}20` },
            achievement.unlocked && { backgroundColor: achievement.color },
          ]}>
            <achievement.icon
              color={achievement.unlocked ? '#ffffff' : achievement.color}
              size={24}
            />
          </View>
          <View style={styles.achievementInfo}>
            <Text style={[
              styles.achievementTitle,
              achievement.unlocked && styles.achievementTitleUnlocked,
            ]}>
              {achievement.title}
            </Text>
            <Text style={styles.achievementDescription}>
              {achievement.description}
            </Text>
            <View style={styles.rarityContainer}>
              <View style={[
                styles.rarityBadge,
                { backgroundColor: getRarityColor(achievement.rarity) },
              ]}>
                <Text style={styles.rarityText}>
                  {getRarityLabel(achievement.rarity)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        
        {!achievement.unlocked && (
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${progressPercentage}%`, backgroundColor: achievement.color },
                ]}
              />
            </View>
            <Text style={styles.progressText}>
              {achievement.progress}/{achievement.maxProgress}
            </Text>
          </View>
        )}
        
        {achievement.unlocked && achievement.unlockedDate && (
          <Text style={styles.unlockedDate}>
            Unlocked on {new Date(achievement.unlockedDate).toLocaleDateString()}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  const BadgeCard = ({ badge }: { badge: Badge }) => (
    <TouchableOpacity
      style={[
        styles.badgeCard,
        badge.earned && styles.badgeCardEarned,
      ]}
    >
      <Text style={styles.badgeIcon}>{badge.icon}</Text>
      <Text style={[
        styles.badgeName,
        badge.earned && styles.badgeNameEarned,
      ]}>
        {badge.name}
      </Text>
      <Text style={styles.badgeDescription}>{badge.description}</Text>
      {badge.earned && badge.earnedDate && (
        <Text style={styles.badgeEarnedDate}>
          {new Date(badge.earnedDate).toLocaleDateString()}
        </Text>
      )}
    </TouchableOpacity>
  );

  const unlockedAchievements = achievements.filter(a => a.unlocked).length;
  const totalAchievements = achievements.length;
  const earnedBadges = badges.filter(b => b.earned).length;
  const totalBadges = badges.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Achievements</Text>
          <Text style={styles.subtitle}>Celebrate your spiritual journey</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{unlockedAchievements}/{totalAchievements}</Text>
            <Text style={styles.statLabel}>Achievements</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{earnedBadges}/{totalBadges}</Text>
            <Text style={styles.statLabel}>Badges</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {Math.round((unlockedAchievements / totalAchievements) * 100)}%
            </Text>
            <Text style={styles.statLabel}>Complete</Text>
          </View>
        </View>

        {/* Tab Selector */}
        <View style={styles.tabSelector}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 'achievements' && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab('achievements')}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === 'achievements' && styles.tabButtonTextActive,
              ]}
            >
              Achievements
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 'badges' && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab('badges')}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === 'badges' && styles.tabButtonTextActive,
              ]}
            >
              Badges
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {selectedTab === 'achievements' ? (
            <View>
              {achievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </View>
          ) : (
            <View style={styles.badgesGrid}>
              {badges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </View>
          )}
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  statItem: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  tabSelector: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#3b82f6',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },
  tabButtonTextActive: {
    color: '#ffffff',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  achievementCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    opacity: 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  achievementCardUnlocked: {
    opacity: 1,
    borderColor: '#10b981',
    borderWidth: 2,
  },
  achievementHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b7280',
    marginBottom: 4,
  },
  achievementTitleUnlocked: {
    color: '#1f2937',
  },
  achievementDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 8,
  },
  rarityContainer: {
    flexDirection: 'row',
  },
  rarityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rarityText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  progressContainer: {
    marginTop: 16,
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
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  unlockedDate: {
    fontSize: 12,
    color: '#10b981',
    marginTop: 8,
    fontWeight: '500',
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  badgeCard: {
    width: (width - 60) / 2,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    opacity: 0.6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  badgeCardEarned: {
    opacity: 1,
    borderColor: '#f59e0b',
    borderWidth: 2,
  },
  badgeIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  badgeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 8,
  },
  badgeNameEarned: {
    color: '#1f2937',
  },
  badgeDescription: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 16,
  },
  badgeEarnedDate: {
    fontSize: 10,
    color: '#f59e0b',
    marginTop: 8,
    fontWeight: '500',
  },
});