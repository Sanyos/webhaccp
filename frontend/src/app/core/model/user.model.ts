export interface UserRegistrationRequestModel {
  username: string;
  password: string;
  rePassword: string;
  email: string;
  phone: string;
  role: string;
}

export interface UserRegistrationResponseModel {
  _id: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  accessToken: string;
  archived?: boolean;
}

export interface UserLoginModel {
  username: string;
  password: string;
}
