export default {
  Onboarding: {
    subTitle: 'Sign in to be able to save your preferences and settings.',
  },
  Signup: {
    form: {
      name: {
        label: 'Your name',
        value: 'name',
        validation: {
          required: 'Name is required',
          invalid: 'Name should be between 2 and 40 characters',
          onlyAlphabets: 'Name should consists of only alphabets',
        },
        minLength: 2,
        maxLength: 40,
        keyboardType: 'default',
        autoCapitalize: 'words',
      },
      email: {
        label: 'Email',
        value: 'email',
        validation: {
          required: 'Email is required',
          invalid: 'Please enter a valid email address',
        },
        maxLength: 55,
        keyboardType: 'email-address',
        autoCapitalize: 'none',
      },
      password: {
        label: 'Password (min 6 characters)',
        value: 'password',
        validation: {
          required: 'Password is required',
          minLength: 'Password should be 6 characters or more',
          maxLength: 'Password length must be between 6 and 26 characters.',
          atLeastLowercaseCharacter:
            'At least 1 lowercase character is required.',
          atLeastUppercaseCharacter:
            'At least 1 uppercase character is required.',
          atLeastDigit: 'At least 1 numeric digit is required.',
          atLeastSpecialCharacter: 'At least 1 special character is required.',
          youHaveToEnterAtLeastDigits:
            'At least 6 digits password is required.',
          match: 'Passwords must match.',
        },
        maxLength: 26,
        keyboardType: 'default',
        autoCapitalize: 'none',
      },
    },
  },
  Login: {
    form: {
      email: {
        label: 'Email',
        value: 'email',
        validation: {
          required: 'Email is required',
          invalid: 'Please enter a valid email address',
        },
        maxLength: 55,
        keyboardType: 'email-address',
        autoCapitalize: 'none',
      },
      password: {
        label: 'Password',
        value: 'password',
        validation: {
          required: 'Password is required',
          minLength: 'Password should be 6 characters or more',
          maxLength: 'Password length must be between 6 and 26 characters.',
          atLeastLowercaseCharacter:
            'At least 1 lowercase character is required.',
          atLeastUppercaseCharacter:
            'At least 1 uppercase character is required.',
          atLeastDigit: 'At least 1 numeric digit is required.',
          atLeastSpecialCharacter: 'At least 1 special character is required.',
          youHaveToEnterAtLeastDigits:
            'At least 6 digits password is required.',
          match: 'Passwords must match.',
        },
        maxLength: 26,
        keyboardType: 'default',
        autoCapitalize: 'none',
      },
    },
  },
  Profile: {
    form: {
      name: {
        label: 'Name shown on your shared cards',
        value: 'name',
        validation: {
          required: 'Name is required',
          invalid: 'Name should be between 2 and 40 characters',
          onlyAlphabets: 'Name should consists of only alphabets',
        },
        minLength: 2,
        maxLength: 40,
        keyboardType: 'default',
        autoCapitalize: 'words',
      },
      email: {
        label: 'Email',
        value: 'email',
        validation: {
          required: 'Email is required',
          invalid: 'Please enter a valid email address',
        },
        maxLength: 55,
        keyboardType: 'email-address',
        autoCapitalize: 'none',
      },
    },
  },
};
