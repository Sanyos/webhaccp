export interface UserRegistrationModel {
  username: string;
  password: string;
  rePassword: string;
  email: string;
  phone: string;
  role: string;
}

export interface UserLoginModel {
  username: string;
  password: string;
}
export interface UserResponseModel {
  _id: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  accessToken: string;
  archived?: boolean;
}

export interface DecodedUserToken {
  username: string;
  role: string;
  iat: number;
}
