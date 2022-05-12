import {gql} from '@apollo/client';

export const IS_EXISTING_USER_BY_EMAIL = (email: string) => gql`
  query {
    isExistingUserByEmail(email: ${email})
  }
`;

