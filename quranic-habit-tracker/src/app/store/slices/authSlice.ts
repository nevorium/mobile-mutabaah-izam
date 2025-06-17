import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isFirstTime: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isFirstTime = action.payload?.isFirstTime || false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isFirstTime = false;
    },
    setFirstTime(state, action) {
      state.isFirstTime = action.payload;
    },
  },
});

export const { setUser, setLoading, setError, logout, setFirstTime } = authSlice.actions;
export default authSlice.reducer;
