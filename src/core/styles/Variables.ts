import * as Colors from './Colors';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

export const NavigationColors = {
  primary: Colors.PRIMARY,
};

export type StyleType = TextStyle & ViewStyle & ImageStyle;
export type ThemeLayout = {[key: string]: StyleType};
export type ThemeMetricsSizes = {[key: string]: number | string};
export type ThemeGutters = {[key: string]: StyleType};
export type ThemeVariables = {
  MetricsSizes: ThemeMetricsSizes;
};

/**
 * Metrics Sizes
 */
const tiny = 4; // 4
const small = 8; // 8
const regular = 16; // 16
const medium = 20; // 20
const medium2 = 24; // 24
const large = 30; // 30
const xl = 40; // 40
const xxl = 50; // 50
const xxxl = 60; // 60

export const MetricsSizes = {
  tiny,
  small,
  regular,
  medium,
  medium2,
  large,
  xl,
  xxl,
  xxxl,
};

export default {
  NavigationColors,
  MetricsSizes,
};
