import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    alert('Event Binding Example (click)');
  }
  onKeyUp(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log('Key pressed (keyup):', input.value);
  }
  onHover() {
    alert('(mouseenter) event binding Example');
  }
}
