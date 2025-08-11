import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
   public name: string = '';

  constructor() { }

  ngOnInit(): void {
    this.name='';
  }

  onInputChange(event: Event) {
    const value =  (event?.target as HTMLInputElement).value;
    this.name = value;
  }

}
