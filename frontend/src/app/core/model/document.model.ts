export interface DocumentRequestModel {}

export interface DocumentResponseModel {
  document_id?: string;
  document_name: string;
  document_date: string;
  document_valid: boolean;
  document_user_name: string;
}
