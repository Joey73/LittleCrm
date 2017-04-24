import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Customer} from '../../services/customer/customer';
import {CustomerService} from '../../services/customer/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  status = false;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  addNewCustomer() {
    this.customerService.createCustomer(this.customer).then(() => {
      this.status = true;
      this.router.navigate(['/customers']);
    });
  }
}
