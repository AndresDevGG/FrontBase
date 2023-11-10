import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { MaterialModule } from '../material-components/material.module';
import { NgModule } from '@angular/core';
import { TableCustomerComponent } from './table-customer/table-customer.component';
import { TransactionsByUserComponent } from './transactions-by-user/transactions-by-user.component';

@NgModule({
  declarations: [
    FormCustomerComponent,
    TableCustomerComponent,
    TransactionsByUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormCustomerComponent,
    TableCustomerComponent,
    TransactionsByUserComponent
  ]
})
export class BankComponentsModule { }
