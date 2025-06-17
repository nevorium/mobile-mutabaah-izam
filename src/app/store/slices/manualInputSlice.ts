import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 0,
  surah: null,
  ayahFrom: '',
  ayahTo: '',
  duration: '',
  category: '',
  rating: 0,
  notes: '',
  image: null,
  draft: {},
  loading: false,
  error: null,
  offlineQueue: [],
};

const manualInputSlice = createSlice({
  name: 'manualInput',
  initialState,
  reducers: {
    setField(state, action) {
      state[action.payload.field] = action.payload.value;
    },
    setDraft(state, action) {
      state.draft = action.payload;
    },
    setStep(state, action) {
      state.step = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    addToOfflineQueue(state, action) {
      state.offlineQueue.push(action.payload);
    },
    clearForm(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setField, setDraft, setStep, setLoading, setError, addToOfflineQueue, clearForm } = manualInputSlice.actions;
export default manualInputSlice.reducer;
