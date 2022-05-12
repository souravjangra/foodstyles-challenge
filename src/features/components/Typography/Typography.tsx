import {fp} from '@application/utils/constants';
import {Colors, Gutters, Layout} from '@core/styles';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMIBOLD,
} from '@core/styles/Typography';
import React from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';

type TextVariants =
  | 'heading'
  | 'headerTitle'
  | 'headerTitle2'
  | 'primary'
  | 'secondary'
  | 'subTitle'
  | 'button'
  | 'label'
  | 'labelSecondary'
  | 'error'
  | 'secondaryButton';

interface TextProps {
  variant: TextVariants;
  children: React.ReactNode;
  style?: ViewStyle | TextStyle;
  onPress?: () => void;
}

const Typography = (props: TextProps) => {
  const {children, variant, style, onPress} = props;
  const layout = Layout();
  const gutters = Gutters();

  const headerTitle = {
    fontSize: fp(20),
    textAlign: 'center',
    fontFamily: FONT_FAMILY_BOLD,
    color: Colors.WHITE,
    lineHeight: 22,
  };

  const headerTitle2 = {
    fontSize: fp(15),
    fontFamily: FONT_FAMILY_BOLD,
    color: Colors.GREY,
    letterSpacing: 0.75,
  };

  const heading = {
    fontSize: fp(17),
    textAlign: 'center',
    fontFamily: FONT_FAMILY_BOLD,
    color: Colors.WHITE,
    letterSpacing: 0.77,
  };
  const primary = {
    color: 'red',
  };
  const secondary = {
    color: 'blue',
  };

  const subTitle: TextStyle = {
    fontSize: fp(18),
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: FONT_FAMILY_REGULAR,
    color: Colors.WHITE,
  };

  const label: TextStyle = {
    fontSize: fp(16),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: Colors.WHITE,
    letterSpacing: 0,
  };

  const labelSecondary: TextStyle = {
    fontSize: fp(14),
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: Colors.GREY,
    letterSpacing: 0,
  };

  const error: TextStyle = {
    fontSize: fp(12),
    fontFamily: FONT_FAMILY_REGULAR,
    color: Colors.RED,
  };

  const button: TextStyle = {
    fontSize: fp(16),
    textAlign: 'center',
    lineHeight: 18,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: Colors.GREY,
  };

  const secondaryButton: TextStyle = {
    fontSize: fp(16),
    textAlign: 'center',
    letterSpacing: 1,
    fontFamily: FONT_FAMILY_BOLD,
    color: Colors.WHITE,
  };

  const variantStyle = StyleSheet.create({
    heading,
    headerTitle,
    headerTitle2,
    primary,
    secondary,
    subTitle,
    button,
    label,
    labelSecondary,
    error,
    secondaryButton,
  });

  // @ts-ignore
  return (
    <Text onPress={onPress} style={[variantStyle[`${variant}`], style]}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  variant: 'primary',
};

export default Typography;
