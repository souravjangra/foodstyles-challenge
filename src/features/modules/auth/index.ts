import {Routes} from '@business/constants';
import LoginScreen from '@features/modules/auth/Login/Login';
import {StackNavigationOptions} from '@react-navigation/stack';
import OnboardingScreen from './Onboarding/Onboarding';
import SignupScreen from './Signup/Signup';

export type AuthStackParamList = {
  AUTH_ONBOARDING: undefined;
  AUTH_LOGIN: undefined;
  AUTH_SIGNUP: undefined;
};

const options: StackNavigationOptions = {gestureEnabled: false};

const authScreens = {
  [Routes.Auth.Onboarding]: {component: OnboardingScreen, options},
  [Routes.Auth.Login]: {component: LoginScreen, options},
  [Routes.Auth.Signup]: {component: SignupScreen, options},
};

export default authScreens;
