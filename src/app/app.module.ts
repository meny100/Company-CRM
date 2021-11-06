import { environment } from './../environments/environment';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactsComponent } from './components/contacts/contacts.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppRouteModule } from './app-routing.module';
import { NameSuffixPipe } from './pipes/name-suffix.pipe';
import { CustomersTableComponent } from './components/customers/customers-table/customers-table.component';
import { HttpClientModule } from "@angular/common/http";
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoginComponent } from './components/login/login.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { LeadsComponent } from './components/leads/leads.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportsComponent } from './components/reports/reports.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { YearEndSaleComponent } from './components/year-end-sale/year-end-sale.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';


@NgModule({
  declarations: [
    PageHeaderComponent,
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    ContactsComponent,
    CustomersComponent,
    PageNotFoundComponent,
    NameSuffixPipe,
    CustomersTableComponent,
    NewCustomerComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    LoginComponent,
    PopUpComponent,
    LeadsComponent,
    SignupComponent,
    ReportsComponent,
    IntegrationsComponent,
    YearEndSaleComponent,
    FooterComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRouteModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
