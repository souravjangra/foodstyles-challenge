import {hp, wp} from '@application/utils/constants';
import {Colors} from '@core/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneBtn: {
    minHeight: hp(43),
    width: wp(151),
    shadowColor: '#6f5d50',
    backgroundColor: Colors.SECONDARY,
    alignSelf: 'center',
  },
  logoutBtn: {
    minHeight: hp(43),
    width: wp(151),
    shadowColor: '#6f5d50',
    backgroundColor: Colors.TRANSPARENT,
    borderWidth: 1,
    borderColor: Colors.GREY_3,
    alignSelf: 'center',
    borderRadius: 24.5,
    justifyContent: 'center',
  },
});
