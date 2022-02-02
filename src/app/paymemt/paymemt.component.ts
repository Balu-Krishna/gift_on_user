import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymemt',
  templateUrl: './paymemt.component.html',
  styleUrls: ['./paymemt.component.css']
})
export class PaymemtComponent implements OnInit {
  _opened: boolean = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  
  _toggleSidebar() {
    this._opened = !this._opened;
  }

}
