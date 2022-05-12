import {useMutation} from '@apollo/client';
import {ph, pv} from '@application/utils/constants';
import {LoginValidation} from '@application/utils/validations';
import {Initials, Strings} from '@business/constants';
import {LOGIN_WITH_EMAIL} from '@business/services/network/graphQL/mutations';
import {Colors, Layout} from '@core/styles';
import {BaseScrollView, BaseView} from '@features/components/Base';
import {Button} from '@features/components/Button';
import ErrorBox from '@features/components/ErrorBox/ErrorBox';
import {Spacer} from '@features/components/Spacer';
import TextField from '@features/components/TextField/TextField';
import {Typography} from '@features/components/Typography';
import {getDefaultHeaderHeight} from '@react-navigation/elements';
import {useAppDispatch} from '@store/';
import {setUser} from '@store/slices/auth';
import {useFormik} from 'formik';
import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {styles} from './Style';

export default function LoginScreen({navigation}) {
  const textInputRefs = useRef<TextInput>(null);
  const dispatch = useAppDispatch();
  const layout = Layout();

  const [loginUser, {data, loading, error}] = useMutation(LOGIN_WITH_EMAIL);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.loginWithEmail));
    }
  }, [data]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Log in',
    });
  }, [navigation]);

  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  const form = useFormik({
    initialValues: Initials.Login,
    validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: values => {
      loginUser({
        variables: {email: values.email, password: values.password},
      });
    },
    validationSchema: LoginValidation,
  });

  return (
    <LinearGradient
      colors={[Colors.ORGANGE, Colors.PRIMARY]}
      style={layout.fill}>
      <BaseView
        barStyle={'light-content'}
        edges={['bottom']}
        style={{
          marginTop: headerHeight,
        }}>
        <BaseScrollView>
          <Spacer value={pv(18)} />
          <View
            style={{
              marginHorizontal: ph(38),
            }}>
            {Object.entries(Strings.Login.form).map(([name, props], index) => {
              return (
                <>
                  {index > 0 && <Spacer value={pv(13)} />}
                  <TextField
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
                      index === Object.entries(Strings.Login.form).length - 1
                        ? 'done'
                        : 'next'
                    }
                    onSubmitEditing={() => {
                      if (
                        index <
                        Object.entries(Strings.Login.form).length - 1
                      ) {
                        textInputRefs[
                          `${Object.entries(Strings.Login.form)[index + 1][0]}`
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
              <ErrorBox
                error={error?.graphQLErrors?.find(it => !!it)?.message}
              />
            )}
            <Spacer value={pv(26)} />

            <Button
              loading={loading}
              style={styles.loginBtn}
              variant="rounded"
              onPress={() => {
                let errors = Object.values(form.errors);
                let values = Object.values(form.values);
                if (
                  values.some(it => it === '') &&
                  values.some(it => it === '')
                ) {
                  Object.entries(Strings.Login.form).map(([name]) => {
                    form.setFieldTouched(name, false, true);
                  });
                } else {
                  form.handleSubmit();
                }
              }}>
              <Typography variant="secondaryButton">
                {'Log in'.toUpperCase()}
              </Typography>
            </Button>

            <Spacer value={pv(21)} />

            <Typography
              variant="label"
              style={{
                textAlign: 'center',
              }}>
              Forgot Password
            </Typography>
          </View>
        </BaseScrollView>
      </BaseView>
    </LinearGradient>
  );
}
