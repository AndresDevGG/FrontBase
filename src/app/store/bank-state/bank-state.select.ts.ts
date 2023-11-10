import { BankState } from "./bank-state.model.ts";
import { CustomerDto } from "src/app/models/customer/customer-dto";
import { createSelector } from "@ngrx/store";

const getCustomers = (state: BankState): Array<CustomerDto> => state.customers;
const getSpinnerInfo = (state: BankState): boolean => state.showSpinner;

const selectCustomers = createSelector((state: { bankState: BankState }) => state.bankState, getCustomers);
const selectSpinner = createSelector((state: { bankState: BankState }) => state.bankState, getSpinnerInfo);

export { selectCustomers, selectSpinner };
