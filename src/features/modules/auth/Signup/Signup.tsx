import {useMutation} from '@apollo/client';
import {ph, pv} from '@application/utils/constants';
import {SignUpValidation} from '@application/utils/validations';
import {Initials, Strings} from '@business/constants';
import {SIGNUP_WITH_EMAIL} from '@business/services/network/graphQL/mutations';
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

export default function SignupScreen({navigation}) {
  const textInputRefs = useRef<TextInput>(null);
  const layout = Layout();

  const dispatch = useAppDispatch();
  const [signupUser, {data, loading, error}] = useMutation(SIGNUP_WITH_EMAIL);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Sign up with Email',
    });
  }, [navigation]);

  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.signUpWithEmail));
    }
  }, [data]);

  const form = useFormik({
    initialValues: Initials.Signup,
    validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: values => {
      signupUser({
        variables: {
          name: values.name,
          email: values.email,
          password: values.password,
        },
      });
    },
    validationSchema: SignUpValidation,
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
            {Object.entries(Strings.Signup.form).map(([name, props], index) => {
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
                      index === Object.entries(Strings.Signup.form).length - 1
                        ? 'done'
                        : 'next'
                    }
                    onSubmitEditing={() => {
                      if (
                        index <
                        Object.entries(Strings.Signup.form).length - 1
                      ) {
                        textInputRefs[
                          `${Object.entries(Strings.Signup.form)[index + 1][0]}`
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
              variant="rounded"
              style={styles.signupBtn}
              onPress={() => {
                let errors = Object.entries(form.errors);
                let values = Object.values(form.values);

                if (
                  values.some(it => it === '') &&
                  values.some(it => it === '')
                ) {
                  Object.entries(Strings.Signup.form).map(([name]) => {
                    form.setFieldTouched(name, false, true);
                  });
                } else {
                  form.handleSubmit();
                }
              }}>
              <Typography variant="secondaryButton">
                {'Sign up'.toUpperCase()}
              </Typography>
            </Button>
          </View>
        </BaseScrollView>
      </BaseView>
    </LinearGradient>
  );
}
