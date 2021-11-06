import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-end-sale',
  templateUrl: './year-end-sale.component.html',
  styleUrls: ['./year-end-sale.component.css']
})
export class YearEndSaleComponent implements OnInit {

  constructor() { }
  headerDescription: string;
  headerIcon: string;
  headerTitle: string;
  ngOnInit() {
    this.headerDescription = '';
    this.headerIcon = 'fas fa-bell';
    this.headerTitle = 'Year End Sales';
  }

}
