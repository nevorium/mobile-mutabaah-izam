import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feed: [],
  loading: false,
  error: null,
  pagination: { lastDoc: null, hasMore: true },
  filter: '',
  search: '',
};

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    setFeed(state, action) {
      state.feed = action.payload;
    },
    addFeed(state, action) {
      state.feed = [...state.feed, ...action.payload];
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
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setFeed, addFeed, setLoading, setError, setPagination, setFilter, setSearch } = communitySlice.actions;
export default communitySlice.reducer;
