import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Customer} from '../../services/customer/customer';
import {CustomerService} from '../../services/customer/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(private router: Router, private route: ActivatedRoute, private customerService: CustomerService) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.customerService
        .getCustomer(params['id']))
      .subscribe((customer) => {
      this.customer = customer;
      });
  }

  saveCustomer() {
    this.customerService.saveCustomer(this.customer)
      .then(() => this.router.navigateByUrl('/customers'));
  }
}
