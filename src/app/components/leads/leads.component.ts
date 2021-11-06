import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  headerTitle: string;
  headerIcon: string;
  headerDescription: string;

  constructor() { }

  ngOnInit() {
    this.headerTitle = 'Leads';
    this.headerIcon = 'fas fa-shopping-cart';
    this.headerDescription = 'List of deals in the system';
  }

}
