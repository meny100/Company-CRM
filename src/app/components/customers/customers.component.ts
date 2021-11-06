import { map, shareReplay, switchMap } from 'rxjs/operators';
import { CustomersService } from './../../services/customers.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { combineLatest, fromEvent, Observable, of } from 'rxjs';
import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, AfterViewInit {
  @ViewChild('input', { static: false }) input: ElementRef;

  headerTitle: string;
  headerIcon: string;
  headerDescription: string;
  id: string;

  customers$: Observable<Customer[]>;
  term: string = '';
  customers: Customer[];
  cachedCustomers$: Observable<Customer[]>;

  constructor(
    public customersService: CustomersService,
    public dialogREf: MatDialog
  ) {}

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'input')
      .pipe(
        switchMap(({ srcElement: { value } }: any) =>
          combineLatest([of(value), this.cachedCustomers$])
        ),
        map(([value, customers]) => {
          const filtered = customers.filter(({ phone }: Customer) =>
            phone.includes(value)
          );
          return filtered;
        })
      )
      .subscribe((filtered: Customer[]) => {
        this.customers$ = of(filtered);
      });
  }

  ngOnInit() {
    this.headerTitle = 'Customers';
    this.headerIcon = 'fas fa-user';
    this.headerDescription = 'The Customers';
    this.term = ""
   
    this.cachedCustomers$ = this.customersService
      .getCustomers()
      .pipe(shareReplay(1));
    this.customers$ = this.cachedCustomers$;
  }

  remove(id: string) {
    this.id = id;
    this.openDialog();
  }

  openDialog(): any {
    const config: MatDialogConfig = {
      width: '400px',
      data: {
        id: this.id,
      },
    };

    const ref = this.dialogREf.open(PopUpComponent, config);
    ref.afterClosed().subscribe((id) => {
      this.customersService.deleteCustomer(id)
    });
  }

  onInputTerm() {
    this.customers$ = this.cachedCustomers$.pipe(
      map((custs: Customer[]) => {
        const filtered = custs?.filter(({ phone }: Customer) =>
          phone.includes(this.term)
        );
        return filtered;
      })
    );
  }

  searchByFirstName(){
    this.customers$ = this.cachedCustomers$.pipe(
      map((custs: any) => {
        const filtered = custs?.filter(({ firstName }: Customer) =>
          firstName.includes(this.term)
        );
        return filtered;
      })
    );
  }

  searchByLastName() {
    this.customers$ = this.cachedCustomers$.pipe(
      map((custs: any) => {
        const filtered = custs?.filter(({ lastName }: Customer) =>
          lastName.includes(this.term)
        );
        return filtered;
      })
    );
  }

}
