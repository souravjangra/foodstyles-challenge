import {hp, wp} from '@application/utils/constants';
import {Colors} from '@core/styles';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Spacer} from '../Spacer';

type ButtonVariants = 'base' | 'rounded' | 'outline' | 'outlineRounded';

interface ButtonProps extends TouchableOpacityProps {
  variant: ButtonVariants;
  children: React.ReactNode;
  style?: ViewStyle;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  loading?: boolean;
}

export default function (props: ButtonProps) {
  const {variant, children, style, leading, trailing, onPress, loading} = props;

  const base = {};
  const rounded = {};

  const variantStyle = StyleSheet.create({
    base,
    rounded: {
      width: wp(250),
      height: hp(57),
      borderRadius: 100,
      backgroundColor: Colors.WHITE,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 0,
      elevation: 4,
    },
    outline: {
      ...base,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.TRANSPARENT,
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[variantStyle[`${variant}`], style]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.WHITE} />
      ) : (
        <>
          {leading ? leading : null}
          <Spacer direction="horizontal" value={8} />
          {children}
          <Spacer direction="horizontal" value={8} />
          {trailing ? trailing : null}
        </>
      )}
    </TouchableOpacity>
  );
}
