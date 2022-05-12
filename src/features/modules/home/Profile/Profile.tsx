import {useMutation} from '@apollo/client';
import {fp, ph, pv, SCREEN_HEIGHT} from '@application/utils/constants';
import {UpdateProfileValidation} from '@application/utils/validations';
import {Initials, Strings} from '@business/constants';
import {UPDATE_USER} from '@business/services/network/graphQL/mutations';
import {Colors, Layout} from '@core/styles';
import {BaseScrollView, BaseView} from '@features/components/Base';
import {Button} from '@features/components/Button';
import ErrorBox from '@features/components/ErrorBox/ErrorBox';
import {Spacer} from '@features/components/Spacer';
import {SuccessBox} from '@features/components/SuccessBox';
import TextField from '@features/components/TextField/TextField';
import {Typography} from '@features/components/Typography';
import {getDefaultHeaderHeight} from '@react-navigation/elements';
import {useAppDispatch, useAppSelector} from '@store/index';
import {logout} from '@store/slices/auth';
import {useFormik} from 'formik';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {styles} from './Style';

export default function ProfileScreen({navigation}) {
  const textInputRefs = useRef<TextInput>(null);
  const layout = Layout();

  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const [updateProfile, {data, loading, error}] = useMutation(UPDATE_USER);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile',
    });
  }, [navigation]);

  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  useEffect(() => {
    if (auth.user?.user) {
      const userData = auth.user?.user;
      form.setFieldValue('name', userData.name);
      form.setFieldValue('email', userData.email);
    }
  }, [auth]);

  useEffect(() => {
    if (data) {
      setShowSuccess(true);
    }
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  }, [showSuccess]);

  const form = useFormik({
    initialValues: Initials.UpdateProfile,
    validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: values => {
      updateProfile({
        variables: {name: values.name, email: values.email},
      });
    },
    validationSchema: UpdateProfileValidation,
  });

  return (
    <BaseView
      barStyle={'dark-content'}
      edges={['bottom']}
      style={{
        marginTop: headerHeight,
        backgroundColor: Colors.WHITE_2,
      }}>
      <BaseScrollView
        style={{
          minHeight: SCREEN_HEIGHT - headerHeight,
          backgroundColor: Colors.WHITE_2,
        }}>
        <Spacer value={pv(12)} />
        <View
          style={{
            marginHorizontal: ph(18),
          }}>
          {Object.entries(Strings.Profile.form).map(([name, props], index) => {
            return (
              <>
                {index > 0 && <Spacer value={pv(13)} />}
                <TextField
                  variant="secondary"
                  ref={r => {
                    textInputRefs[`${name}`] = r;
                  }}
                  value={form.values[`${name}`]}
                  onChangeText={text => {
                    form.setFieldValue(name, text);
                  }}
                  error={form.errors[`${name}`]}
                  touched={form.touched[`${name}`]}
                  maxLength={props.maxLength}
                  keyboardType={props.keyboardType}
                  autoCapitalize={props.autoCapitalize}
                  label={props.label}
                  onFocus={() => {
                    form.setFieldTouched(name, true);
                  }}
                  onBlur={() => {
                    form.setFieldTouched(name, false, true);
                  }}
                  returnKeyType={
                    index === Object.entries(Strings.Profile.form).length - 1
                      ? 'done'
                      : 'next'
                  }
                  onSubmitEditing={() => {
                    if (
                      index <
                      Object.entries(Strings.Profile.form).length - 1
                    ) {
                      textInputRefs[
                        `${Object.entries(Strings.Profile.form)[index + 1][0]}`
                      ]?.focus();
                    } else {
                      textInputRefs[name]?.blur();
                    }
                  }}
                  blurOnSubmit={false}
                  secureTextEntry={name === 'password'}
                />
              </>
            );
          })}

          {error?.message != null && (
            <ErrorBox error={error?.graphQLErrors?.find(it => !!it)?.message} />
          )}
          {showSuccess && (
            <SuccessBox message={'Profile Updated Successfully.'} />
          )}
          <Spacer value={pv(26)} />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: pv(12),
            alignSelf: 'center',
          }}>
          <Button
            style={styles.logoutBtn}
            variant="outlineRounded"
            onPress={() => {
              dispatch(logout());
            }}>
            <Typography
              variant="secondaryButton"
              style={{
                fontSize: fp(13),
                lineHeight: 14,
                opacity: 0.8,
                letterSpacing: 0.5,
                color: Colors.GREY,
              }}>
              {'LOG OUT'.toUpperCase()}
            </Typography>
          </Button>
          <Spacer value={pv(41)} />

          <Button
            loading={loading}
            style={styles.doneBtn}
            variant="rounded"
            onPress={() => {
              form.handleSubmit();
            }}>
            <Typography variant="secondaryButton">
              {'Done'.toUpperCase()}
            </Typography>
          </Button>

          <Spacer value={pv(12)} />
        </View>
      </BaseScrollView>
    </BaseView>
  );
}
