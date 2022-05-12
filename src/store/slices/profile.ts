import {
  createSlice,
} from '@reduxjs/toolkit';

export interface ProfileState {}

const profileInitialState = {} as ProfileState;

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {},
  extraReducers: (builder) => {
  },
});

const profileReducer = profileSlice.reducer;
export default profileReducer;
