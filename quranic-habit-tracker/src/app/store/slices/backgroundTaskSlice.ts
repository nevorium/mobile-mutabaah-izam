import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backgroundTasks: [],
  status: 'idle',
  error: null,
};

const backgroundTaskSlice = createSlice({
  name: 'backgroundTask',
  initialState,
  reducers: {
    setBackgroundTasks(state, action) {
      state.backgroundTasks = action.payload;
    },
    addBackgroundTask(state, action) {
      state.backgroundTasks.push(action.payload);
    },
    removeBackgroundTask(state, action) {
      state.backgroundTasks = state.backgroundTasks.filter(t => t.id !== action.payload);
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setBackgroundTasks, addBackgroundTask, removeBackgroundTask, setStatus, setError } = backgroundTaskSlice.actions;
export default backgroundTaskSlice.reducer;
