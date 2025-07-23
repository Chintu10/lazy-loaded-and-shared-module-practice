import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  @Output() inputChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  OnkeyUp(event: KeyboardEvent): void {
    const inputElement = event.target as HTMLInputElement;
    this.inputChanged.emit(inputElement.value);
  }


}
