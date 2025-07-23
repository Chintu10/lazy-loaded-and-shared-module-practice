import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public sidebarValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleSideBarInput(value: string): void {
    this.sidebarValue = value;
  }

}
