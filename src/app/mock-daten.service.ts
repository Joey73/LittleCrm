import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Customer} from './services/customer/customer';

@Injectable()
export class MockDatenService implements InMemoryDbService {
  createDb(): {} {
    const customers: Customer[] = [
      {
        id: 1,
        fullname: 'Hans Müller',
        amount: 0
      },
      {
        id: 2,
        fullname: 'Jörg Schmitz',
        amount: 20
      },
      {
        id: 3,
        fullname: 'Peter Müller',
        amount: 30
      }
    ];

    return {customers};
  }

  constructor() { }

}
