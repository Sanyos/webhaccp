export interface CompanyResponseModel {
  company_id?: number;
  company_category: string;
  company_name: string;
  company_billing_name: string;
  company_location: string;
  company_phone: string;
  company_headquarters: string;
  company_billing_address: string;
  company_registration_number: string;
  company_vat_number: string;
  company_archived: boolean;
  company_user_id: number;
}

export interface CompanyWithUserResponseModel {
  company_id?: number;
  company_category: string;
  company_name: string;
  company_billing_name: string;
  company_location: string;
  company_phone: string;
  company_headquarters: string;
  company_billing_address: string;
  company_registration_number: string;
  company_vat_number: string;
  company_archived: boolean;
  user_name: string;
  company_user_id: number;
}
