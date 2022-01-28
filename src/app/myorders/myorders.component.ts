import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  isShown: boolean = true ; 
  isOrder: boolean = true ; 
  isTrack: boolean = true ; 
  constructor() { }

  ngOnInit(): void {
  }
  toggleShow() {
    this.isShown = ! this.isShown;
  }
  toggleCancel() {
    this.isOrder = ! this.isOrder;
  }
  toggleTrack() {
    this.isTrack = ! this.isTrack;
    this.isShown = ! this.isShown;
  }
}
