import { Injectable } from '@angular/core';
import {Customer} from './customer';
import {Http} from '@angular/http';

// Später: alle Operatoren in extra Datei auslagen
import 'rxjs/add/operator/toPromise';
import {environment} from '../../../environments/environment';

@Injectable()
export class CustomerService {
  // url = 'api/customers';
  url = environment.urls.customers;

  constructor(private http: Http) { }

  getCustomer(id): Promise<Customer> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then((res) => res.json().data);
  }

  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.url)
      .toPromise()
      .then((res) => res.json().data);
  }

  deleteCustomer(id) {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then((res) => res);
  }

  createCustomer(customer: Customer): Promise<any> {
    return this.http.post(this.url, customer)
      .toPromise()
      .then((res) => res.json().data);
  }

  saveCustomer(customer: any) {
    return this.http
      .put(`${this.url}/${customer.id}`, customer)
      .toPromise()
      .then(() => {});
  }
}
