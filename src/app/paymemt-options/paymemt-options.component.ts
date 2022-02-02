import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymemt-options',
  templateUrl: './paymemt-options.component.html',
  styleUrls: ['./paymemt-options.component.css']
})
export class PaymemtOptionsComponent implements OnInit {

    isAddcard: boolean = true ; 
    isAddbank: boolean= true ;
    isAddupi: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddcard(){
this.isAddcard  = ! this.isAddcard;

  }
  toggleAddbank(){
    this.isAddbank = ! this.isAddbank;
   
  }
  toggleAddupi(){
    this.isAddupi = ! this.isAddupi;
    this.isAddcard  = ! this.isAddcard;
  }
}
