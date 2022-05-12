import authReducer from '@store/slices/auth';
import profileReducer from '@store/slices/profile';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export default rootReducer;
