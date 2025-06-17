import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prayerTimes: [],
  loading: false,
  error: null,
};

const prayerTimesSlice = createSlice({
  name: 'prayerTimes',
  initialState,
  reducers: {
    setPrayerTimes(state, action) {
      state.prayerTimes = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setPrayerTimes, setLoading, setError } = prayerTimesSlice.actions;
export default prayerTimesSlice.reducer;
