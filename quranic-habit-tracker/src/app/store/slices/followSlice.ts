import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  following: [],
  followers: [],
  loading: false,
  error: null,
};

const followSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {
    setFollowing(state, action) {
      state.following = action.payload;
    },
    setFollowers(state, action) {
      state.followers = action.payload;
    },
    addFollowing(state, action) {
      state.following.push(action.payload);
    },
    removeFollowing(state, action) {
      state.following = state.following.filter(id => id !== action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setFollowing, setFollowers, addFollowing, removeFollowing, setLoading, setError } = followSlice.actions;
export default followSlice.reducer;
