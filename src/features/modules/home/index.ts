import {Routes} from '@business/constants';
import {StackNavigationOptions} from '@react-navigation/stack';
import {ProfileScreen} from './Profile';

export type ProfileStackParamList = {
  PROFILE_INDEX: undefined;
};

const options: StackNavigationOptions = {gestureEnabled: false};

const profileScreens = {
  [Routes.Profile.Index]: {component: ProfileScreen, options},
};

export default profileScreens;
