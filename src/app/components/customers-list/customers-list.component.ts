import { Component, OnInit } from '@angular/core';
import {Customer} from '../../services/customer/customer';
import {CustomerService} from '../../services/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];

  constructor(private customersService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  delete(item) {
    this.customersService.deleteCustomer(item.id)
      .then(() => this.getCustomers());
  }

  edit(item) {
    this.router.navigate(['customers', item.id]);
  }

  private getCustomers() {
    this.customersService.getCustomers()
      .then((customers) => {
        this.customers = customers;
      });
  }
}
