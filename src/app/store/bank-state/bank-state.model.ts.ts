import { CustomerDto } from "src/app/models/customer/customer-dto";

export interface BankState {
  customers: Array<CustomerDto>
  showSpinner: boolean;
}
