import { PaymentStatus } from '../enum/payment-status.enum';

export interface PaymentResponse {
  e: PaymentStatus;
  m: string;
  o: string;
  r: number;
  t: number;
}
