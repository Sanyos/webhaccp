export interface DocumentResponseModel {
  document_id?: string;
  document_name: string;
  document_user_id: string;
  document_company_id: string;
}

export interface DocumentWithUserResponseModel {
  document_id?: string;
  document_name: string;
  document_user_id: string;
  document_company_id: string;
  user_name: string;
}
