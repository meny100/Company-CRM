import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CountriesService } from 'src/app/services/countries.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: '../new-customer/new-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  headerIcon: string;
  headerTitle: string;
  headerDescription: string;
  id: string;

  //#region reactive form
  RFG: FormGroup;

  //#endregion

  constructor(
    private customersService: CustomersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public countriesService: CountriesService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.headerTitle = 'Edit Customer';
    this.headerIcon = 'fas fa-pen';
    this.headerDescription = 'Edit This Customer Details';



    this.customersService
      .getCustomer(this.id)
      .subscribe((cust: Customer | null) => {
        this.RFG = new FormGroup({
          id: new FormControl(cust?.id),
          firstName: new FormControl(cust?.firstName, [
            Validators.required,
            Validators.minLength(2),
          ]),
          lastName: new FormControl(cust?.lastName, [
            Validators.required,
            Validators.minLength(2),
          ]),
          email: new FormControl(cust?.email, [
            Validators.required,
            Validators.email,
          ]),
          phone: new FormControl(cust?.phone, [
            Validators.required,
            Validators.pattern(/^0[2-9]\d{7,8}$/),
          ]),
          address: new FormControl(cust?.address),
          notes: new FormControl(cust?.notes),
        });
      });
  }

  onSubmitRF() {
    if (this.RFG.valid) {
      this.customersService.updateCustomer(this.RFG.value);

      this.router.navigate(["/customers"]);
    }
  }
  onUpdateAddress($event: any){
    this.countriesService.onUpdateAddress(this.RFG, $event);
  }

  getNameFromCoutriesArr(coutriesArr: any[] ){
    return coutriesArr.find(x => x.name === this.RFG.get('address')?.value)?.name ?? "select";
  }
}
