import useCustomBackBehaviour from '@application/hooks/useCustomBackBehavior';
import {navigationRef} from '@application/navigation/RootNavigation';
import {hp, wp} from '@application/utils/constants';
import {Routes} from '@business/constants';
import {Colors} from '@core/styles';
import {Icon} from '@features/components/Icon';
import {Typography} from '@features/components/Typography';
import {CommonStackParamList} from '@features/modules/commonScreens';
import profileScreens, {ProfileStackParamList} from '@features/modules/home';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = createNativeStackNavigator<ProfileStackParamList>();

type ProfileStackNavigationProp = NativeStackNavigationProp<
  CommonStackParamList,
  'AUTH_INDEX'
>;

type ProfileStackRouteProp = RouteProp<CommonStackParamList, 'AUTH_INDEX'>;

function AuthStack() {
  const navigation = useNavigation<ProfileStackNavigationProp>();
  const route = useRoute<ProfileStackRouteProp>();

  useCustomBackBehaviour(() => {});

  const headerLeft = (e: {canGoBack: boolean}) => {
    const {canGoBack} = e;
    return (
      canGoBack && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            height: 55,
            width: 55,
            borderRadius: 55 / 2,
            backgroundColor: Colors.WHITE,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={navigationRef.current?.goBack}>
          <Icon
            name="ChevronBack"
            width={wp(20)}
            height={hp(20)}
            viewBox="0 0 20 20"
          />
        </TouchableOpacity>
      )
    );
  };

  const headerTitle = (e: {children: string}) => {
    const {children} = e;
    return (
      <Typography variant="headerTitle2">{children.toUpperCase()}</Typography>
    );
  };

  return (
    <Profile.Navigator
      screenOptions={{
        headerLeft,
        headerTitle,
        headerShown:
          navigationRef.current?.getCurrentRoute()?.name !==
          Routes.Auth.Onboarding,
        headerTransparent: true,
        headerBackVisible: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.TRANSPARENT,
        },
      }}
      initialRouteName={Routes.Profile.Profile as keyof ProfileStackParamList}>
      {Object.entries({
        ...profileScreens,
      }).map(([name, props]) => {
        return (
          <Profile.Screen
            key={name}
            name={name as keyof ProfileStackParamList}
            {...props}
          />
        );
      })}
    </Profile.Navigator>
  );
}

export default AuthStack;
