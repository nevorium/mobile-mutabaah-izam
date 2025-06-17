import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  surahList: [],
  loading: false,
  error: null,
};

const surahSlice = createSlice({
  name: 'surah',
  initialState,
  reducers: {
    setSurahList(state, action) {
      state.surahList = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setSurahList, setLoading, setError } = surahSlice.actions;
export default surahSlice.reducer;
