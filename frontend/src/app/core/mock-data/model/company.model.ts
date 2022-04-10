import { CompanyCategoryType } from '../../enum/company-category-type.enum';

export interface CompanyRequestModel {
  category: CompanyCategoryType;
  companyName: string;
  address: string;
  location: string;
  companyPhoneNumber: string;
  headquarters: string;
  billingAddress: string;
  registrationNumber: string;
  vatNumber: string;
}

export interface CompanyResponseModel {
  _id: string;
  category: CompanyCategoryType;
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
