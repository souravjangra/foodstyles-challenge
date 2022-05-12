import {ph, pv} from '@application/utils/constants';
import {Colors} from '@core/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  successBox: {
    marginTop: pv(14),
    backgroundColor: Colors.SECONDARY,
    alignSelf: 'center',
    paddingHorizontal: ph(9),
    paddingVertical: pv(3),
    borderRadius: 4,
  },
  successText: {
    textAlign: 'center',
  },
});
