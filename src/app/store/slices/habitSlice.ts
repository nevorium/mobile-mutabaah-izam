// src/app/store/slices/habitSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
};

const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    setHabits(state, action) {
      state.habits = action.payload;
    },
    addHabit(state, action) {
      state.habits.push(action.payload);
    },
    clearHabits(state) {
      state.habits = [];
    },
  },
});

export const { setHabits, addHabit, clearHabits } = habitSlice.actions;
export default habitSlice.reducer;
