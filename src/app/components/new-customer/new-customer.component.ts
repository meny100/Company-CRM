import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CountriesService } from 'src/app/services/countries.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
})
export class NewCustomerComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;

  //#region reactive form
  RFG = new FormGroup({
    firstName: new FormControl('john', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('doe', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('johndoe@john.doe', [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl('0546510255', [
      Validators.required,
      Validators.pattern(/^0[2-9]\d{7,8}$/),
    ]),
    address: new FormControl(),
    notes: new FormControl(),
  });

  //#endregion

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  address?: string = '';
  notes?: string = '';

  constructor(
    private customersService: CustomersService,
    private router: Router,
    public countriesService: CountriesService
  ) {}

  ngOnInit() {

    this.headerTitle = 'Add New Customer Form';
    this.headerIcon = 'fas fa-plus-circle';
    this.headerDescription = 'Write customer details';
  }

  onSubmitRF() {
    if (this.RFG.valid) {
      this.customersService.addCustomer(this.RFG.value);
      this.router.navigate(["/customers"]);
    }
  }

  getNameFromCoutriesArr(coutriesArr: any[]){
    return coutriesArr.find(x => x.name === this.RFG.get('address')?.value)?.name ?? "Select";
  }

  onUpdateAddress($event: string){
    this.countriesService.onUpdateAddress(this.RFG, $event);
  }
}
