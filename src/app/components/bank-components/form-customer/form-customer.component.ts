import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from 'src/app/store/core/app-state.model';
import { Store } from '@ngrx/store';
import { bankRoot } from 'src/app/store/bank-state/bank-state.root.ts';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss']
})
export class FormCustomerComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.clienteForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      console.log(this.clienteForm.value);
      this.store.dispatch(bankRoot.SAVE_CUSTOMER({data: {...this.clienteForm.value} }));
    }
  }
}
