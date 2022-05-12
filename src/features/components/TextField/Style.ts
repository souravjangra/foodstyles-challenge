import {fp, hp, ph} from '@application/utils/constants';
import {Colors} from '@core/styles';
import {FONT_FAMILY_SEMIBOLD} from '@core/styles/Typography';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: ph(8),
    backgroundColor: Colors.WHITE,
    minHeight: hp(35),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: `rgba(0,0,0,0.1)`,
    shadowColor: `rgba(0,0,0,0.6)`,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: fp(16),
    letterSpacing: 0,
    color: Colors.GREY,
  },
  textInputSecondary: {
    paddingHorizontal: ph(8),
    backgroundColor: Colors.GREY_2,
    minHeight: hp(35),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: `rgba(0,0,0,0.1)`,
    shadowColor: `rgba(0,0,0,0.6)`,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: fp(16),
    letterSpacing: 0,
    color: Colors.GREY,
  },
});
