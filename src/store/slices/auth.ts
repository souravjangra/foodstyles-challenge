import {User, UserData} from '@business/interfaces/Auth/SignupEmailResponse';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  user: UserData | null;
}

const authInitialState = {
  isLoggedIn: false,
  user: null,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = null;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      if (state.user?.user != null) {
        state.user!.user = action.payload;
      }
    },
  },
});

export const {setUser, logout, updateUser} = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
