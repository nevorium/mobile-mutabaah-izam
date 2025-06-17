import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: {},
  loading: false,
  error: null,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComments(state, action) {
      state.comments = action.payload;
    },
    addComment(state, action) {
      const { storyId, comment } = action.payload;
      if (!state.comments[storyId]) state.comments[storyId] = [];
      state.comments[storyId].push(comment);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setComments, addComment, setLoading, setError } = commentSlice.actions;
export default commentSlice.reducer;
