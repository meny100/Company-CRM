import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.css']
})
export class IntegrationsComponent implements OnInit {
  headerDescription: string;
  headerIcon: string;
  headerTitle: string;


  constructor() { }

  ngOnInit() {
    this.headerDescription = 'Integration features & different system parts';
    this.headerIcon = 'fab fa-stack-exchange';
    this.headerTitle = 'Integration';
  }

}
