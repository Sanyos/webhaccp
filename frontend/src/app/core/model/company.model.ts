import { CompanyCategoryTypes } from '../enum/company-category-type.enum';
import { UserResponseModel } from './user.model';

export interface CompanyRequestModel {
  category: CompanyCategoryTypes;
  companyName: string;
  address: string;
  location: string;
  companyPhoneNumber: string;
  headquarters: string;
  billingAddress: string;
  registrationNumber: string;
  vatNumber: string;
  archived: boolean;
}

export interface CompanyResponseModel {
  _id?: string;
  category: CompanyCategoryTypes;
  companyName: string;
  address: string;
  location: string;
  companyPhoneNumber: string;
  headquarters: string;
  billingAddress: string;
  registrationNumber: string;
  vatNumber: string;
  archived: boolean;
  user: UserResponseModel;
}
