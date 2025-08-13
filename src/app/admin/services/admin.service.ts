import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  private settingValue = 'Default Setting';

  constructor() { }

  getSettingValue(): string {
    return this.settingValue;
  }

  setSettingValue(value: string): void {
    this.settingValue = value;
  }
}
