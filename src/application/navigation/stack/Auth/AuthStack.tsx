import useCustomBackBehaviour from '@application/hooks/useCustomBackBehavior';
import {navigationRef} from '@application/navigation/RootNavigation';
import {hp, wp} from '@application/utils/constants';
import {Routes} from '@business/constants';
import {Colors} from '@core/styles';
import {Icon} from '@features/components/Icon';
import {Typography} from '@features/components/Typography';
import authScreens, {AuthStackParamList} from '@features/modules/auth';
import {CommonStackParamList} from '@features/modules/commonScreens';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Auth = createNativeStackNavigator<AuthStackParamList>();

type AuthStackNavigationProp = NativeStackNavigationProp<
  CommonStackParamList,
  'AUTH_INDEX'
>;

type AuthStackRouteProp = RouteProp<CommonStackParamList, 'AUTH_INDEX'>;

function AuthStack() {
  const navigation = useNavigation<AuthStackNavigationProp>();
  const route = useRoute<AuthStackRouteProp>();

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
    return <Typography variant="headerTitle">{children}</Typography>;
  };
  console.log('a -- ', navigationRef.current?.getCurrentRoute()?.name);

  return (
    <Auth.Navigator
      screenOptions={{
        headerLeft,
        headerTitle,
        headerShown:
          navigationRef.current?.getCurrentRoute()?.name !== undefined &&
          navigationRef.current?.getCurrentRoute()?.name !==
            Routes.Auth.Onboarding &&
          navigationRef.current?.getCurrentRoute()?.name !== Routes.Auth.Index,
        headerTransparent: true,
        headerBackVisible: false,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors.TRANSPARENT,
        },
      }}
      initialRouteName={Routes.Auth.Onboarding as keyof AuthStackParamList}>
      {Object.entries({
        ...authScreens,
      }).map(([name, props]) => {
        return (
          <Auth.Screen
            key={name}
            name={name as keyof AuthStackParamList}
            {...props}
          />
        );
      })}
    </Auth.Navigator>
  );
}

export default AuthStack;
