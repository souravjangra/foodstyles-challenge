import {gql} from '@apollo/client';

export const SIGNUP_WITH_EMAIL = gql`
  mutation SignupWithEmail(
    $name: NonEmptyString!
    $email: EmailAddress!
    $password: Password!
  ) {
    signUpWithEmail(name: $name, email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;

export const LOGIN_WITH_EMAIL = gql`
  mutation LoginUser($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateProfile($name: NonEmptyString!, $email: EmailAddress!) {
    updateUser(name: $name, email: $email) {
      id
      name
      email
      facebookId
      googleId
      appleId
    }
  }
`;
