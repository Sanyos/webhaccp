import { UserResponseModel } from './user.model';

export interface DocumentRequestModel {}

export interface DocumentResponseModel {
  _id?: string;
  name: string;
  date: string;
  valid: boolean;
  user: UserResponseModel;
}
