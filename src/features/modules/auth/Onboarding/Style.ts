import {hp, ph, pv, wp} from '@application/utils/constants';
import {Colors} from '@core/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp(140),
    height: hp(180),
    marginTop: pv(60),
    alignSelf: 'center',
  },
  bySignup: {
    color: Colors.WHITE,
    fontSize: 13,
    opacity: 0.8,
    marginHorizontal: ph(38),
  },
  underlineText: {
    color: Colors.WHITE,
    fontSize: 13,
    opacity: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 13,
    opacity: 0.8,
  },
  instructionView: {
    marginHorizontal: ph(38),
    marginBottom: pv(21),
    alignSelf: 'center',
  },
  bannerStripView: {
    position: 'absolute',
    backgroundColor: Colors.RED,
    height: hp(39),
    width: '100%',
    left: '-20%',
    transform: [{rotate: '-30deg'}],
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 5,
  },
  betaVersionText: {
    left: '-15%',
    top: '15%',
  },
});
