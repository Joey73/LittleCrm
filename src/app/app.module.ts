import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CustomerService} from './services/customer/customer.service';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { StartComponent } from './components/start/start.component';
import { DefaultComponent } from './components/default/default.component';
import {RouterModule} from '@angular/router';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';
import { ExampleComponent } from './components/example/example.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import {InMemoryBackendConfigArgs, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockDatenService} from './mock-daten.service';
import {environment} from '../environments/environment';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';

// Decorator
let moduleList = [
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot(
    [
      {
        path: 'template',
        component: TemplateSyntaxComponent
      },
      {
        path: 'customers',
        component: CustomersListComponent
      },
      {
        path: 'new',
        component: NewCustomerComponent
      },
      {
        path: 'customers/:id',
        component: EditCustomerComponent
      },
      {
        path: '',
        component: StartComponent
      },
      {
        path: '**',
        component: DefaultComponent
      }
    ]
  )
];

if (!environment.production) {
  moduleList.push(
    InMemoryWebApiModule.forRoot(
      MockDatenService,
      {delete404: true} as InMemoryBackendConfigArgs
    )
  );
}

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    StartComponent,
    DefaultComponent,
    TemplateSyntaxComponent,
    ExampleComponent,
    TableViewComponent,
    NewCustomerComponent,
    EditCustomerComponent
  ],
  imports: moduleList,
  providers: [CustomerService, {
    provide: LOCALE_ID,
    useValue: 'de-DE'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
