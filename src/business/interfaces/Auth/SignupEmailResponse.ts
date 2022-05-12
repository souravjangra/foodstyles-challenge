export interface SignUpWithEmailData {
  signUpWithEmail: UserData;
}

export interface UserData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  facebookId: null;
  googleId: null;
  appleId: null;
}
