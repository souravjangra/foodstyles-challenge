import {navigate} from '@application/navigation/RootNavigation';
import {ph, pv} from '@application/utils/constants';
import {Images, Routes, Strings} from '@business/constants';
import {Colors, Gutters, Layout} from '@core/styles';
import {BaseScrollView} from '@features/components/Base';
import BaseView from '@features/components/Base/BaseView';
import {Button} from '@features/components/Button';
import {Image} from '@features/components/Image';
import Spacer from '@features/components/Spacer/Spacer';
import {Typography} from '@features/components/Typography';
import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Style';

const OnboardingScreen = () => {
  const layout = Layout();
  const gutters = Gutters();

  const renderLeadingIcon = (source: any) => {
    return (
      <Image
        source={source}
        style={{
          width: 20,
          height: 20,
        }}
        resizeMode="contain"
      />
    );
  };

  const renderSocialText = (text: string) => {
    return <Typography variant="button">{text}</Typography>;
  };

  return (
    <LinearGradient
      colors={[Colors.ORGANGE, Colors.PRIMARY]}
      style={layout.fill}>
      <View style={styles.bannerStripView}>
        <Typography variant="heading" style={styles.betaVersionText}>
          {'BETA VERSION'}
        </Typography>
      </View>
      <BaseView barStyle={'light-content'} edges={['top', 'bottom']}>
        <BaseScrollView>
          {/* Logo */}
          <Image source={Images.Logo} style={styles.logo} resizeMode="center" />
          <Typography
            variant="subTitle"
            style={{
              marginHorizontal: ph(38),
            }}>
            {Strings.Onboarding.subTitle}
          </Typography>
          <Spacer value={pv(30)} />

          {/* Social Buttons */}
          <View
            style={{
              marginHorizontal: ph(70),
            }}>
            <Button variant="rounded" leading={renderLeadingIcon(Images.Apple)}>
              {renderSocialText('Sign in with Apple')}
            </Button>
            <Spacer value={pv(15)} />

            <Button
              variant="rounded"
              leading={renderLeadingIcon(Images.Facebook)}>
              {renderSocialText('Sign in with Facebook')}
            </Button>
            <Spacer value={pv(15)} />

            <Button
              variant="rounded"
              leading={renderLeadingIcon(Images.Google)}>
              {renderSocialText('Sign in with Google')}
            </Button>
            <Spacer value={pv(15)} />

            <Button
              variant="rounded"
              onPress={() => {
                navigate(Routes.Auth.Signup);
              }}>
              {renderSocialText('Sign up with Email')}
            </Button>
            <Spacer value={pv(20)} />

            <Typography
              variant="button"
              style={{
                color: Colors.WHITE,
              }}
              onPress={() => {
                navigate(Routes.Auth.Login);
              }}>
              {'Log in with Email'}
            </Typography>

            <Spacer value={pv(38)} />
          </View>

          {/* Bottom Instruction Text */}
          <Typography variant="button" style={styles.bySignup}>
            {'By signing in you accept the '}
          </Typography>
          <View style={[layout.row, styles.instructionView]}>
            <Typography variant="button" style={styles.underlineText}>
              {'General Terms'}
            </Typography>
            <Typography variant="button" style={styles.text}>
              {' and '}
            </Typography>
            <Typography variant="button" style={styles.underlineText}>
              {'Privacy Policy'}
            </Typography>
          </View>
        </BaseScrollView>
      </BaseView>
    </LinearGradient>
  );
};

export default OnboardingScreen;
