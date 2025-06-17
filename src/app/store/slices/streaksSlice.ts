import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  streak: 0,
  lastActivityDate: null,
  loading: false,
  error: null,
};

const streaksSlice = createSlice({
  name: 'streaks',
  initialState,
  reducers: {
    setStreak(state, action) {
      state.streak = action.payload.streak;
      state.lastActivityDate = action.payload.lastActivityDate;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setStreak, setLoading, setError } = streaksSlice.actions;
export default streaksSlice.reducer;
