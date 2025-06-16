import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scheduled: [],
  status: 'idle',
  error: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setScheduled(state, action) {
      state.scheduled = action.payload;
    },
    addScheduled(state, action) {
      state.scheduled.push(action.payload);
    },
    removeScheduled(state, action) {
      state.scheduled = state.scheduled.filter(n => n.id !== action.payload);
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setScheduled, addScheduled, removeScheduled, setStatus, setError } = notificationSlice.actions;
export default notificationSlice.reducer;
