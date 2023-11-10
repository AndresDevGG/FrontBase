import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomerComponent } from './form-customer.component';

describe('FormCustomerComponentComponent', () => {
  let component: FormCustomerComponent;
  let fixture: ComponentFixture<FormCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCustomerComponent]
    });
    fixture = TestBed.createComponent(FormCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
