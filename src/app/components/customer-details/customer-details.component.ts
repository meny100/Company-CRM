import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;

  customer$: Observable<Customer | null>
  constructor(
    private customersService: CustomersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.headerTitle = "Customer Details";
    this.headerIcon = "fas fa-user";
    this.headerDescription = "View Customer Details";

    const id = this.activatedRoute.snapshot.params["id"];
    this.customer$ = this.customersService.getCustomer(id)

  }

}
