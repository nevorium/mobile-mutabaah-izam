import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSyncing: false,
  queue: [],
  lastSync: null,
  error: null,
};

const syncSlice = createSlice({
  name: 'sync',
  initialState,
  reducers: {
    setSyncing(state, action) {
      state.isSyncing = action.payload;
    },
    addToQueue(state, action) {
      state.queue.push(action.payload);
    },
    removeFromQueue(state, action) {
      state.queue = state.queue.filter(item => item.id !== action.payload);
    },
    setLastSync(state, action) {
      state.lastSync = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearQueue(state) {
      state.queue = [];
    },
  },
});

export const { setSyncing, addToQueue, removeFromQueue, setLastSync, setError, clearQueue } = syncSlice.actions;
export default syncSlice.reducer;
