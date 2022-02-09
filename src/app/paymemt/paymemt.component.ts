import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymemt',
  templateUrl: './paymemt.component.html',
  styleUrls: ['./paymemt.component.css']
})
export class PaymemtComponent implements OnInit {
  cards = [
    {
      type: 'VISA',
      number: 'ICICI Bank Debit Card ***1246',
      name: 'Vikram Guptha',
      expires: '06/23'
    },
    {
      type: 'MASTERCARD',
      number: 'IDBI Bank Debit Card ***2356',
      name: 'Vikram Guptha',
      expires: '02/22'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
