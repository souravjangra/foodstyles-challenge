import {StyleSheet} from 'react-native';
import {MetricsSizes, ThemeGutters} from '@core/styles/Variables';
import {ph, pv} from '@application/utils/constants';

/**
 * Generate Styles depending on MetricsSizes vars availabled at ./Theme/Variables
 * Styles are like :
 * <size><direction><op>: {
 *    <op><direction>: <value>
 * }
 * where:
 * <size>: is the key of the variable included in MetricsSizes
 * <direction>: can be ['Bottom','Top','Right','Left','Horizontal','Vertical']
 * <op>: can be ['Margin', 'Padding']
 * <value>: is the value of the <size>
 */

/**
 *
 * @return {*}
 * @param metricSizes
 */

export default function (): ThemeGutters {
  return StyleSheet.create({
    ...Object.entries(MetricsSizes).reduce(
      (acc, [key, value]) => ({
        ...acc,
        /* Margins */
        [`${key}BMargin`]: {
          marginBottom: pv(value),
        },
        [`${key}TMargin`]: {
          marginTop: pv(value),
        },
        [`${key}RMargin`]: {
          marginRight: ph(value),
        },
        [`${key}LMargin`]: {
          marginLeft: ph(value),
        },
        [`${key}VMargin`]: {
          marginVertical: pv(value),
        },
        [`${key}HMargin`]: {
          marginHorizontal: ph(value),
        },
        /* Paddings */
        [`${key}BPadding`]: {
          paddingBottom: pv(value),
        },
        [`${key}TPadding`]: {
          paddingTop: pv(value),
        },
        [`${key}RPadding`]: {
          paddingRight: ph(value),
        },
        [`${key}LPadding`]: {
          paddingLeft: ph(value),
        },
        [`${key}VPadding`]: {
          paddingVertical: pv(value),
        },
        [`${key}HPadding`]: {
          paddingHorizontal: ph(value),
        },
      }),
      {},
    ),
  });
}
