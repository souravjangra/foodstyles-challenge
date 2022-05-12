import AuthStack from '@application/navigation/stack/Auth';
import ProfileStack from '@application/navigation/stack/Profile';
import {Routes} from '@business/constants';
import {AuthStackParamList} from '@features/modules/auth';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export type CommonStackParamList = {
  AUTH_INDEX: AuthStackParamList;
};

const options: NativeStackNavigationOptions = {gestureEnabled: false};

export const unauthenticatedScreens = {
  [Routes.Auth.Index]: {
    component: AuthStack,
    options: options,
  },
};

const commonScreens = {
  [Routes.Profile.Index]: {
    component: ProfileStack,
    options: options,
  },
};

export default commonScreens;
