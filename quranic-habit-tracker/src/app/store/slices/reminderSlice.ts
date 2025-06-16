import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enabled: true,
  prayerReminders: true,
  customReminders: [],
  location: null,
  timezone: null,
  dnd: false,
  notificationHistory: [],
  backgroundStatus: 'idle',
  error: null,
};

const reminderSlice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    setEnabled(state, action) {
      state.enabled = action.payload;
    },
    setPrayerReminders(state, action) {
      state.prayerReminders = action.payload;
    },
    setCustomReminders(state, action) {
      state.customReminders = action.payload;
    },
    addCustomReminder(state, action) {
      state.customReminders.push(action.payload);
    },
    removeCustomReminder(state, action) {
      state.customReminders = state.customReminders.filter(r => r.id !== action.payload);
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setTimezone(state, action) {
      state.timezone = action.payload;
    },
    setDnd(state, action) {
      state.dnd = action.payload;
    },
    addNotificationHistory(state, action) {
      state.notificationHistory.push(action.payload);
    },
    setBackgroundStatus(state, action) {
      state.backgroundStatus = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  setEnabled, setPrayerReminders, setCustomReminders, addCustomReminder, removeCustomReminder,
  setLocation, setTimezone, setDnd, addNotificationHistory, setBackgroundStatus, setError
} = reminderSlice.actions;
export default reminderSlice.reducer;
