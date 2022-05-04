export interface UserRegistrationModel {
  name: string;
  password: string;
  rePassword: string;
  email: string;
  phone: string;
  role: string;
}

export interface UserLoginModel {
  name: string;
  password: string;
}

export interface UserUpdateModel {
  name: string;
  oldPassword: string;
  password: string;
  rePassword: string;
  email: string;
  phone: string;
  role: string;
}

export interface UserResponseModel {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  accessToken: string;
  archived: boolean | string;
}

export interface DecodedUserToken {
  name: string;
  role: string;
  iat: number;
}
