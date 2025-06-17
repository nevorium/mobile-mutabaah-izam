import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  progress: 0,
  streak: 0,
  quickActions: [],
  inspiration: [],
  timeline: [],
  activity: [],
  loading: false,
  error: null,
  lastUpdated: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardData(state, action) {
      return { ...state, ...action.payload, loading: false, error: null };
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLastUpdated(state, action) {
      state.lastUpdated = action.payload;
    },
    cacheDashboard(state, action) {
      // for offline cache
    },
  },
});

export const { setDashboardData, setLoading, setError, setLastUpdated, cacheDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
