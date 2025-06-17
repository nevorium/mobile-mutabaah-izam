import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  period: '7D',
  data: {},
  loading: false,
  error: null,
  exportStatus: null,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setPeriod(state, action) {
      state.period = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setExportStatus(state, action) {
      state.exportStatus = action.payload;
    },
  },
});

export const { setPeriod, setData, setLoading, setError, setExportStatus } = analyticsSlice.actions;
export default analyticsSlice.reducer;
