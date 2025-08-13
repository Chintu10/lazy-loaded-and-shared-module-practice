import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
   public name: string = '';
   settingText!: string; // bound to ngModel

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.name='';
    this.settingText = this.adminService.getSettingValue();
  }

  onInputChange(event: Event) {
    const value =  (event?.target as HTMLInputElement).value;
    this.name = value;
  }

  onValueChange(): void {
    // Push updates from UI → component → service
    this.adminService.setSettingValue(this.settingText);
  }

  // This is just to simulate component → UI changes later
  resetToDefault(): void {
    this.settingText = 'Default Setting';
    this.adminService.setSettingValue(this.settingText);
  }

}
