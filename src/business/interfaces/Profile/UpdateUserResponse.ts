export interface UpdateUserData {
  updateUser: UpdateUser;
}

export interface UpdateUser {
  id: string;
  name: string;
  email: string;
  facebookId: null;
  googleId: null;
  appleId: null;
}
