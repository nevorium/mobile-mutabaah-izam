import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  daily: 0,
  weekly: 0,
  monthly: 0,
  target: 0,
  achievement: 0,
  loading: false,
  error: null,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setProgress(state, action) {
      return { ...state, ...action.payload, loading: false, error: null };
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setProgress, setLoading, setError } = progressSlice.actions;
export default progressSlice.reducer;
