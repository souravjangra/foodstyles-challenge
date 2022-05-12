import commonScreens, {
  unauthenticatedScreens,
} from '@features/modules/commonScreens';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '@store/index';
import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {isMountedRef, navigationRef} from './RootNavigation';

const screenOptions = {
  cardStyle: {backgroundColor: 'white'},
  headerShown: false,
  gestureEnabled: false,
};

type ParamList = {};
export const Stack = createNativeStackNavigator<ParamList>();

const linking: LinkingOptions<any> = {
  prefixes: ['HelloWorld://'],
  config: {
    screens: {},
  },
};

export default function Router() {
  const auth = useAppSelector(state => state.auth);
  const [screens, setScreens] = useState<any>(commonScreens);
  useEffect(() => {
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
      KeyboardManager.setEnableDebugging(false);
      KeyboardManager.setKeyboardDistanceFromTextField(10);
      KeyboardManager.setLayoutIfNeededOnUpdate(true);
      KeyboardManager.setEnableAutoToolbar(true);
      KeyboardManager.setToolbarDoneBarButtonItemText('Done');
      KeyboardManager.setToolbarManageBehaviourBy('subviews'); // "subviews" | "tag" | "position"
      KeyboardManager.setToolbarPreviousNextButtonEnable(false);
      KeyboardManager.setToolbarTintColor('#0000FF'); // Only #000000 format is supported
      KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
      KeyboardManager.setShouldShowToolbarPlaceholder(true);
      KeyboardManager.setOverrideKeyboardAppearance(false);
      KeyboardManager.setKeyboardAppearance('default'); // "default" | "light" | "dark"
      KeyboardManager.setShouldResignOnTouchOutside(true);
      KeyboardManager.setShouldPlayInputClicks(true);
      KeyboardManager.resignFirstResponder();
      KeyboardManager.isKeyboardShowing().then(isShowing => {
        // ...
      });
    }
  }, []);

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => {
        isMountedRef.current = true;
      }}>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={screenOptions}>
          {auth.isLoggedIn ? (
            <Stack.Group>
              {Object.entries({
                ...commonScreens,
              }).map(([name, props]) => {
                return (
                  <Stack.Screen
                    key={name}
                    name={name as keyof ParamList}
                    {...props}
                  />
                );
              })}
            </Stack.Group>
          ) : (
            <Stack.Group>
              {Object.entries({
                ...unauthenticatedScreens,
              }).map(([name, props]) => {
                return (
                  <Stack.Screen
                    key={name}
                    name={name as keyof ParamList}
                    {...props}
                  />
                );
              })}
            </Stack.Group>
          )}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
