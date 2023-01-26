export interface UserRegistrationModel {
  user_name: string;
  user_password: string;
  rePassword: string;
  user_email: string;
  user_phone: string;
  user_role: string;
  user_archived: boolean;
  user_reg_active: boolean;
  user_new_pw_exp_date: string;
}

export interface UserLoginModel {
  user_name: string;
  user_password: string;
}

export interface UserUpdateModel {
  user_name: string;
  oldPassword: string;
  user_password: string;
  rePassword: string;
  user_email: string;
  user_phone: string;
  user_role: string;
  user_archived: boolean;
  user_reg_active: boolean;
  user_new_pw_exp_date: string;
}

export interface UserResponseModel {
  user_id: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  user_role: string;
  accessToken: string;
  user_archived: boolean | string;
  user_reg_active: boolean;
  user_new_pw_exp_date: string;
}

export interface DecodedUserToken {
  name: string;
  role: string;
  iat: number;
}
