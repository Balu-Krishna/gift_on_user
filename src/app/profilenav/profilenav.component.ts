import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
@Component({
  selector: 'app-profilenav',
  templateUrl: './profilenav.component.html',
  styleUrls: ['./profilenav.component.css']
})
export class ProfilenavComponent implements OnInit {

  constructor(public router: Router){}

  ngOnInit(): void {
  }

}
