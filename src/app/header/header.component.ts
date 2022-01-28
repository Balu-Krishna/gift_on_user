import { Component, OnInit,EventEmitter , Output } from '@angular/core';
import { Router }  from "@angular/router";
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  @Output() public sidenavToggle = new EventEmitter();
  constructor(public router: Router){}

  ngOnInit(): void {
    console.log('Hello')
  }
  ngAfterViewInit() {
    $('.mobile_hide').on('click', function(){
      console.log('Hi');
      $('#navbarSupportedContent').toggleClass('show hide');
      // (<any>$('.navbar-collapse')).collapse('hide');
  });
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
    this.navbarOpen = !this.navbarOpen;

  }
}
