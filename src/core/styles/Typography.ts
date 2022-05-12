import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

// FONT FAMILY
export const FONT_FAMILY_SEMIBOLD = 'ProximaNovaAlt-Semibold';
export const FONT_FAMILY_REGULAR = 'ProximaNovaAlt-Regular';
export const FONT_FAMILY_BOLD = 'ProximaNovaAlt-Bold';
export const FONT_FAMILY_COND_SEMIBOLD = 'ProximaNovaAltCond-Semibold';

// FONT SIZE
const baseSize = 0.0021;

export const FONT_SIZE_12 = height * 0.0148;

export const FONT_SIZE_14 = height * 0.0169;

export const FONT_SIZE_16 = height * 0.019;

export const FONT_SIZE_32 = 2 * FONT_SIZE_16;

export const FONT_SIZE_34 = 2 * FONT_SIZE_16 + baseSize;

export const FONT_SIZE_28 = 2 * FONT_SIZE_14;

export const FONT_SIZE_22 = 2 * FONT_SIZE_12 - baseSize;

export const FONT_SIZE_24 = 2 * FONT_SIZE_12;

export const FONT_SIZE_48 = FONT_SIZE_24 * 2;

export const FONT_SIZE_20 = FONT_SIZE_22 - baseSize;

export const FONT_SIZE_18 = FONT_SIZE_16 + baseSize;

export const FONT_SIZE_17 = FONT_SIZE_34 / 2;

export const FONT_SIZE_15 = FONT_SIZE_16 - baseSize / 2;

export const FONT_SIZE_13 = FONT_SIZE_15 - baseSize;

export const FONT_SIZE_11 = FONT_SIZE_13 - baseSize;

export const FONT_SIZE_10 = FONT_SIZE_12 - baseSize;

export const FONT_SIZE_8 = FONT_SIZE_16 / 2;
