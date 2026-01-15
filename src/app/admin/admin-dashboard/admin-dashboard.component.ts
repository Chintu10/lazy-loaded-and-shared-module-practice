import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public sidebarValue: string = '';
  public product: any;

  constructor() { }
 
  ngOnInit(): void {
     this.product = {name: 'Mobile'};
  }

  handleSideBarInput(value: string): void {
    this.sidebarValue = value;
  }

}
