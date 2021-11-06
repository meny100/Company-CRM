import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingComponent } from './lazy-loading.component';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from 'src/app/components/customers/customers.component';
import { NewCustomerComponent } from 'src/app/components/new-customer/new-customer.component';
import { CustomerDetailsComponent } from 'src/app/components/customer-details/customer-details.component';
import { EditCustomerComponent } from 'src/app/components/edit-customer/edit-customer.component';
import { ContactsComponent } from 'src/app/components/contacts/contacts.component';
import { LeadsComponent } from 'src/app/components/leads/leads.component';
import { ReportsComponent } from 'src/app/components/reports/reports.component';
import { IntegrationsComponent } from 'src/app/components/integrations/integrations.component';
import { YearEndSaleComponent } from 'src/app/components/year-end-sale/year-end-sale.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LazyLoadingComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full',
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'customers/new',
        component: NewCustomerComponent,
      },
      {
        path: 'customer/:id',
        component: CustomerDetailsComponent,
      },
      {
        path: 'customer/:id/edit',
        component: EditCustomerComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'leads',
        component: LeadsComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'integrations',
        component: IntegrationsComponent,
      },
      {
        path: 'year-end-sale',
        component: YearEndSaleComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes) ],
  declarations: [LazyLoadingComponent],
  exports: [RouterModule],
})
export class LazyLoadingModule {}
