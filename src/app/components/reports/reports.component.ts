import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  headerDescription: string;
  headerIcon: string;
  headerTitle: string;

  constructor() {}

  ngOnInit() {
    this.headerDescription = 'Reporting on the system';
    this.headerIcon = 'fas fa-signal';
    this.headerTitle = 'Reports';
  }
}
