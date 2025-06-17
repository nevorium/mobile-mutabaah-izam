import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  period: 'weekly',
  category: 'totalAyat',
  leaderboard: [],
  loading: false,
  error: null,
  pagination: { lastDoc: null, hasMore: true },
  search: '',
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    setPeriod(state, action) {
      state.period = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setLeaderboard(state, action) {
      state.leaderboard = action.payload;
    },
    addLeaderboard(state, action) {
      state.leaderboard = [...state.leaderboard, ...action.payload];
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setPagination(state, action) {
      state.pagination = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setPeriod, setCategory, setLeaderboard, addLeaderboard, setLoading, setError, setPagination, setSearch } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
