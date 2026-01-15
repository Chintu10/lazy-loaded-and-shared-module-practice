import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string = '';
  public image: string = '';
  public hint: string = '';
  public isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkMobile();
    this.title = 'Header component from interpolation';
    this.image = 'https://angular.io/assets/images/logos/angular/angular.png';
    this.hint = 'This is a hint header component';
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkMobile();
  }

  private checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }
}
