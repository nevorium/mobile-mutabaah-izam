import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  achievements: [],
  userAchievements: [],
  progress: {},
  loading: false,
  error: null,
  unlockNotification: null,
  shareStatus: null,
};

const achievementSlice = createSlice({
  name: 'achievement',
  initialState,
  reducers: {
    setAchievements(state, action) {
      state.achievements = action.payload;
    },
    setUserAchievements(state, action) {
      state.userAchievements = action.payload;
    },
    setProgress(state, action) {
      state.progress = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setUnlockNotification(state, action) {
      state.unlockNotification = action.payload;
    },
    setShareStatus(state, action) {
      state.shareStatus = action.payload;
    },
  },
});

export const { setAchievements, setUserAchievements, setProgress, setLoading, setError, setUnlockNotification, setShareStatus } = achievementSlice.actions;
export default achievementSlice.reducer;
