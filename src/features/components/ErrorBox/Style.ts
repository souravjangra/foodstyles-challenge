import {ph, pv} from '@application/utils/constants';
import {Colors} from '@core/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  errorBox: {
    marginTop: pv(14),
    backgroundColor: Colors.RED,
    alignSelf: 'center',
    paddingHorizontal: ph(9),
    paddingVertical: pv(3),
    borderRadius: 4,
  },
  errorText: {
    textAlign: 'center',
  },
});
