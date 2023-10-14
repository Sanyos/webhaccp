export interface UserResponseModel {
  user_id: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  user_role: string;
  accessToken: string;
  user_archived: boolean;
  user_reg_active: boolean;
  user_new_pw_exp_date: string;
}
