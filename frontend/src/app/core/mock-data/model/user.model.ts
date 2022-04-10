export interface UserRequestModel {
  username: string;
  password: string;
  rePassword: string;
  email: string;
  phone: string;
  role: string;
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

export interface LoginUserModel {
  username: string;
  password: string;
}
