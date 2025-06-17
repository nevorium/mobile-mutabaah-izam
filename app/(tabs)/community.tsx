import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share, 
  Search,
  TrendingUp,
  Award,
  Plus
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface CommunityPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    level: number;
  };
  content: string;
  type: 'inspiration' | 'achievement' | 'question' | 'story';
  timestamp: string;
  likes: number;
  comments: number;
  liked: boolean;
  tags: string[];
}

interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  points: number;
  streak: number;
  rank: number;
}

export default function Community() {
  const [selectedTab, setSelectedTab] = useState<'feed' | 'leaderboard'>('feed');
  const [searchQuery, setSearchQuery] = useState('');

  const communityPosts: CommunityPost[] = [
    {
      id: '1',
      author: {
        name: 'Ahmad Hassan',
        avatar: '👨‍🦱',
        level: 12,
      },
      content: 'Alhamdulillah! Just completed my 30-day Quran reading streak. The consistency has brought so much peace to my daily routine. May Allah accept our efforts. 🤲',
      type: 'achievement',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      liked: false,
      tags: ['streak', 'quran', 'gratitude'],
    },
    {
      id: '2',
      author: {
        name: 'Fatima Al-Zahra',
        avatar: '👩‍🦱',
        level: 8,
      },
      content: 'Beautiful reminder from today\'s reading: "And whoever relies upon Allah - then He is sufficient for him." (65:3) SubhanAllah, exactly what I needed to hear today.',
      type: 'inspiration',
      timestamp: '4 hours ago',
      likes: 42,
      comments: 15,
      liked: true,
      tags: ['inspiration', 'quran', 'reminder'],
    },
    {
      id: '3',
      author: {
        name: 'Omar Abdullah',
        avatar: '👨',
        level: 15,
      },
      content: 'Question for the community: What are your favorite duas to recite during difficult times? Looking for some guidance and support. JazakAllahu khair.',
      type: 'question',
      timestamp: '6 hours ago',
      likes: 18,
      comments: 23,
      liked: false,
      tags: ['question', 'dua', 'support'],
    },
    {
      id: '4',
      author: {
        name: 'Aisha Rahman',
        avatar: '👩',
        level: 10,
      },
      content: 'Started my journey with this app 3 months ago. From struggling to pray consistently to maintaining a 45-day streak - Allah\'s guidance through this community has been incredible. Thank you all! 💚',
      type: 'story',
      timestamp: '1 day ago',
      likes: 67,
      comments: 31,
      liked: true,
      tags: ['story', 'journey', 'gratitude', 'community'],
    },
  ];

  const leaderboard: LeaderboardEntry[] = [
    {
      id: '1',
      name: 'Muhammad Ali',
      avatar: '👨‍🦲',
      points: 2450,
      streak: 89,
      rank: 1,
    },
    {
      id: '2',
      name: 'Khadija Bint Khuwaylid',
      avatar: '👩‍🦳',
      points: 2380,
      streak: 76,
      rank: 2,
    },
    {
      id: '3',
      name: 'Abu Bakr As-Siddiq',
      avatar: '👴',
      points: 2290,
      streak: 82,
      rank: 3,
    },
    {
      id: '4',
      name: 'Aisha Bint Abu Bakr',
      avatar: '👩',
      points: 2150,
      streak: 65,
      rank: 4,
    },
    {
      id: '5',
      name: 'Umar Ibn Al-Khattab',
      avatar: '👨‍🦱',
      points: 2080,
      streak: 71,
      rank: 5,
    },
  ];

  const getPostTypeColor = (type: CommunityPost['type']) => {
    switch (type) {
      case 'inspiration': return '#10b981';
      case 'achievement': return '#f59e0b';
      case 'question': return '#3b82f6';
      case 'story': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const getPostTypeLabel = (type: CommunityPost['type']) => {
    switch (type) {
      case 'inspiration': return 'Inspiration';
      case 'achievement': return 'Achievement';
      case 'question': return 'Question';
      case 'story': return 'Story';
      default: return 'Post';
    }
  };

  const PostCard = ({ post }: { post: CommunityPost }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.authorInfo}>
          <Text style={styles.authorAvatar}>{post.author.avatar}</Text>
          <View style={styles.authorDetails}>
            <Text style={styles.authorName}>{post.author.name}</Text>
            <View style={styles.authorMeta}>
              <Text style={styles.authorLevel}>Level {post.author.level}</Text>
              <Text style={styles.postTimestamp}>• {post.timestamp}</Text>
            </View>
          </View>
        </View>
        <View style={[
          styles.postTypeBadge,
          { backgroundColor: getPostTypeColor(post.type) },
        ]}>
          <Text style={styles.postTypeText}>
            {getPostTypeLabel(post.type)}
          </Text>
        </View>
      </View>

      <Text style={styles.postContent}>{post.content}</Text>

      <View style={styles.postTags}>
        {post.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>#{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Heart
            color={post.liked ? '#ef4444' : '#6b7280'}
            size={20}
            fill={post.liked ? '#ef4444' : 'none'}
          />
          <Text style={[
            styles.actionText,
            post.liked && { color: '#ef4444' },
          ]}>
            {post.likes}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle color="#6b7280" size={20} />
          <Text style={styles.actionText}>{post.comments}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Share color="#6b7280" size={20} />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const LeaderboardCard = ({ entry }: { entry: LeaderboardEntry }) => (
    <View style={styles.leaderboardCard}>
      <View style={styles.rankContainer}>
        <Text style={[
          styles.rankNumber,
          entry.rank <= 3 && styles.topRank,
        ]}>
          #{entry.rank}
        </Text>
        {entry.rank <= 3 && (
          <Award
            color={entry.rank === 1 ? '#f59e0b' : entry.rank === 2 ? '#6b7280' : '#cd7c2f'}
            size={16}
          />
        )}
      </View>
      
      <Text style={styles.leaderboardAvatar}>{entry.avatar}</Text>
      
      <View style={styles.leaderboardInfo}>
        <Text style={styles.leaderboardName}>{entry.name}</Text>
        <View style={styles.leaderboardStats}>
          <Text style={styles.leaderboardPoints}>{entry.points} pts</Text>
          <Text style={styles.leaderboardStreak}>🔥 {entry.streak}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Community</Text>
          <Text style={styles.subtitle}>Connect with fellow believers</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search color="#6b7280" size={20} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search posts, people, or topics..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>

        {/* Tab Selector */}
        <View style={styles.tabSelector}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 'feed' && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab('feed')}
          >
            <MessageCircle
              color={selectedTab === 'feed' ? '#ffffff' : '#6b7280'}
              size={20}
            />
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === 'feed' && styles.tabButtonTextActive,
              ]}
            >
              Feed
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 'leaderboard' && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab('leaderboard')}
          >
            <TrendingUp
              color={selectedTab === 'leaderboard' ? '#ffffff' : '#6b7280'}
              size={20}
            />
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === 'leaderboard' && styles.tabButtonTextActive,
              ]}
            >
              Leaderboard
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {selectedTab === 'feed' ? (
            <View>
              {/* Create Post Button */}
              <TouchableOpacity style={styles.createPostButton}>
                <Plus color="#3b82f6" size={20} />
                <Text style={styles.createPostText}>Share your journey...</Text>
              </TouchableOpacity>

              {/* Posts */}
              {communityPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </View>
          ) : (
            <View>
              {/* Leaderboard Header */}
              <View style={styles.leaderboardHeader}>
                <Text style={styles.leaderboardTitle}>Top Contributors</Text>
                <Text style={styles.leaderboardSubtitle}>
                  Based on consistency and community engagement
                </Text>
              </View>

              {/* Leaderboard Entries */}
              {leaderboard.map((entry) => (
                <LeaderboardCard key={entry.id} entry={entry} />
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
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1f2937',
  },
  tabSelector: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  tabButtonActive: {
    backgroundColor: '#3b82f6',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 8,
  },
  tabButtonTextActive: {
    color: '#ffffff',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  createPostButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  createPostText: {
    fontSize: 16,
    color: '#6b7280',
    marginLeft: 12,
  },
  postCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  authorAvatar: {
    fontSize: 32,
    marginRight: 12,
  },
  authorDetails: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  authorMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  authorLevel: {
    fontSize: 12,
    color: '#3b82f6',
    fontWeight: '600',
  },
  postTimestamp: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
  postTypeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  postTypeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  postContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
    marginBottom: 12,
  },
  postTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 6,
    fontWeight: '500',
  },
  leaderboardHeader: {
    marginBottom: 20,
  },
  leaderboardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  leaderboardSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  leaderboardCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
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
  rankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 40,
  },
  rankNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6b7280',
  },
  topRank: {
    color: '#f59e0b',
  },
  leaderboardAvatar: {
    fontSize: 32,
    marginHorizontal: 12,
  },
  leaderboardInfo: {
    flex: 1,
  },
  leaderboardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  leaderboardStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  leaderboardPoints: {
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '600',
    marginRight: 12,
  },
  leaderboardStreak: {
    fontSize: 14,
    color: '#f59e0b',
    fontWeight: '500',
  },
  followButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  followButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
});