import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reactions: {},
  loading: false,
  error: null,
};

const reactionSlice = createSlice({
  name: 'reaction',
  initialState,
  reducers: {
    setReactions(state, action) {
      state.reactions = action.payload;
    },
    addReaction(state, action) {
      const { storyId, reaction } = action.payload;
      if (!state.reactions[storyId]) state.reactions[storyId] = [];
      state.reactions[storyId].push(reaction);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setReactions, addReaction, setLoading, setError } = reactionSlice.actions;
export default reactionSlice.reducer;
