import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  challenges: [],
  loading: false,
  error: null,
};

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    setChallenges(state, action) {
      state.challenges = action.payload;
    },
    addChallenge(state, action) {
      state.challenges.push(action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setChallenges, addChallenge, setLoading, setError } = challengeSlice.actions;
export default challengeSlice.reducer;
