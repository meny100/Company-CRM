import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
  @Input() customersAtChild: Customer[] | null;
  @Output() onDeleteCustomer = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  remove(id: string| undefined){
    this.onDeleteCustomer.emit(id);
  }
}
