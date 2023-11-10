import { CustomerDto } from 'src/app/models/customer/customer-dto';
import { HttpResponseType } from '../http/models/http-response-type';
import { HttpService } from '../http/http.service';
import { Injectable } from '@angular/core';
import { SaveCustomerPayload } from 'src/app/models/customer/save-customer-payload';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _base: string = 'customer';

  constructor(
    private _http: HttpService
  ) { }

  getCustomers(): HttpResponseType<Array<CustomerDto>> {
    //return this._http.send<Array<CustomerDto>>('get', this._base);

    const customers: Array<CustomerDto> = [
      {
        id: 'aaaaa',
        name: 'Andres Gutierrez',
        address: 'calle 23 # 135',
        phone: '3005421242',
        email: 'andres@gmail.com'
      },
      {
        id: 'aaaaa-2',
        name: 'Jozsef Acosta',
        address: 'calle 23 # 135',
        phone: '3005421242',
        email: 'joz@gmail.com'
      }
    ];
    return of(customers);

  }

  saveCustomer(payload: SaveCustomerPayload): HttpResponseType<any> {
    return this._http.send<any>('post', this._base, payload);
  }
}
