import { createSlice } from '@reduxjs/toolkit';

const initialState = { breedName: null, breedId: null };

const breedSlice = createSlice({
  name: 'breed',
  initialState,
  reducers: {
    changeBreed(state, action) {
      state.breedName = action.payload.breedName;
      state.breedId = action.payload.breedId;
    },
  },
});

export const { changeBreed } = breedSlice.actions;
export default breedSlice.reducer;
