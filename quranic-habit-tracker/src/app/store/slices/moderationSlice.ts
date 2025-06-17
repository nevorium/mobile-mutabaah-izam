import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reports: [],
  blockedUsers: [],
  loading: false,
  error: null,
};

const moderationSlice = createSlice({
  name: 'moderation',
  initialState,
  reducers: {
    setReports(state, action) {
      state.reports = action.payload;
    },
    addReport(state, action) {
      state.reports.push(action.payload);
    },
    setBlockedUsers(state, action) {
      state.blockedUsers = action.payload;
    },
    blockUser(state, action) {
      state.blockedUsers.push(action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setReports, addReport, setBlockedUsers, blockUser, setLoading, setError } = moderationSlice.actions;
export default moderationSlice.reducer;
