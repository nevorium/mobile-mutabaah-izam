import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import habitReducer from '../store/slices/habitSlice';
import authReducer from '../store/slices/authSlice';
import dashboardReducer from '../store/slices/dashboardSlice';
import manualInputReducer from '../store/slices/manualInputSlice';
import surahReducer from '../store/slices/surahSlice';
import { activitiesApi } from '../store/slices/activitiesSlice';
import streaksReducer from '../store/slices/streaksSlice';
import progressReducer from '../store/slices/progressSlice';
import syncReducer from '../store/slices/syncSlice';
import analyticsReducer from '../store/slices/analyticsSlice';
import reminderReducer from '../store/slices/reminderSlice';
import notificationReducer from '../store/slices/notificationSlice';
import prayerTimesReducer from '../store/slices/prayerTimesSlice';
import backgroundTaskReducer from '../store/slices/backgroundTaskSlice';
import leaderboardReducer from '../store/slices/leaderboardSlice';
import followReducer from '../store/slices/followSlice';
import challengeReducer from '../store/slices/challengeSlice';
import achievementReducer from '../store/slices/achievementSlice';
import communityReducer from '../store/slices/communitySlice';
import guildReducer from '../store/slices/guildSlice';
import commentReducer from '../store/slices/commentSlice';
import reactionReducer from '../store/slices/reactionSlice';
import moderationReducer from '../store/slices/moderationSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    habits: habitReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
    manualInput: manualInputReducer,
    surah: surahReducer,
    streaks: streaksReducer,
    progress: progressReducer,
    sync: syncReducer,
    analytics: analyticsReducer,
    reminder: reminderReducer,
    notification: notificationReducer,
    prayerTimes: prayerTimesReducer,
    backgroundTask: backgroundTaskReducer,
    leaderboard: leaderboardReducer,
    follow: followReducer,
    challenge: challengeReducer,
    achievement: achievementReducer,
    community: communityReducer,
    guild: guildReducer,
    comment: commentReducer,
    reaction: reactionReducer,
    moderation: moderationReducer,
    [activitiesApi.reducerPath]: activitiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(activitiesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
