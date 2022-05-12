import {Strings} from '@business/constants';
import * as Yup from 'yup';

export const NameValidation = Yup.string().test(
  Strings.Signup.form.name.value,
  Strings.Signup.form.name.validation.onlyAlphabets,
  (value, testContext) => {
    const {path, createError} = testContext;

    if (!value) return true;
    if (value.length < Strings.Signup.form.name.minLength) {
      return createError({
        path,
        message: Strings.Signup.form.name.validation.invalid,
      });
    }
    if (!/^[aA-zZ\s]+$/.test(value)) {
      return createError({
        path,
        message: Strings.Signup.form.name.validation.onlyAlphabets,
      });
    }
    return true;
  },
);

export const EmailValidation = Yup.string().email();

export const PasswordValidation = Yup.string()
  .required(Strings.Signup.form.password.validation.required)
  .test(
    Strings.Signup.form.password.value,
    'test',
    (value: any, testContext) => {
      const {path, createError} = testContext;
      if (!value) return true;
      switch (Boolean(value)) {
        case !/^(?=.*[a-z])/.test(value):
          return createError({
            path,
            message:
              Strings.Signup.form.password.validation.atLeastLowercaseCharacter,
          });
        case !/^(?=.*[A-Z])/.test(value):
          return createError({
            path,
            message:
              Strings.Signup.form.password.validation.atLeastUppercaseCharacter,
          });
        case !/^(?=.*[0-9])/.test(value):
          return createError({
            path,
            message: Strings.Signup.form.password.validation.atLeastDigit,
          });
        case !/^(?=.*[!@#\$%\^&\*])/.test(value):
          return createError({
            path,
            message:
              Strings.Signup.form.password.validation.atLeastSpecialCharacter,
          });
        default:
          return true;
      }
    },
  )
  .min(6, Strings.Signup.form.password.validation.minLength)
  .max(26, Strings.Signup.form.password.validation.maxLength);

export const SignUpValidation = Yup.object().shape({
  name: NameValidation.required(Strings.Signup.form.name.validation.required),
  email: EmailValidation.required(
    Strings.Signup.form.email.validation.required,
  ),
  password: PasswordValidation,
});

export const LoginValidation = Yup.object().shape({
  email: EmailValidation.required(
    Strings.Signup.form.email.validation.required,
  ),
  password: Yup.string().required(
    Strings.Signup.form.password.validation.required,
  ),
});

export const UpdateProfileValidation = Yup.object().shape({
  name: NameValidation,
  email: EmailValidation,
});
