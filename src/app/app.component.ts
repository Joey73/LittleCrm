import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {CustomerService} from './services/customer/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private info: string;

  title = 'My little CRM-System';
  customer: any;
  environment = environment.production;

  // Dependency Injection (DI)
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }
}
