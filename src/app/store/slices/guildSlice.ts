import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guilds: [],
  myGuilds: [],
  loading: false,
  error: null,
};

const guildSlice = createSlice({
  name: 'guild',
  initialState,
  reducers: {
    setGuilds(state, action) {
      state.guilds = action.payload;
    },
    setMyGuilds(state, action) {
      state.myGuilds = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setGuilds, setMyGuilds, setLoading, setError } = guildSlice.actions;
export default guildSlice.reducer;
