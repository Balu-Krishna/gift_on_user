import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storeproducts',
  templateUrl: './storeproducts.component.html',
  styleUrls: ['./storeproducts.component.css']
})
export class StoreproductsComponent implements OnInit {
  Products = [
    {
      "img": "assets/images/p.svg",
      "price": "26,569",
      "name": "Women 18Kt Gold Ring In  Gold (2.59 gram) with design",
      "address" : "Road Number 34,Madhapur",
      "cust":"4.5"
  },
  {
    "img": "assets/images/p1.svg",
    "price": "26,569",
    "name": "Mr & Mrs Gold Couple Diamond Band",
    "address" : "Road Number 34,Madhapur",
    "cust":"3.5"
  },
  {
  "img": "assets/images/p2.svg",
  "price": "26,569",
  "name": "Rings",
  "address" : "Road Number 34,Madhapur",
  "cust":"5"
  },
  {
    "img": "assets/images/p.svg",
    "price": "26,569",
    "name": "Women 18Kt Gold Ring In  Gold (2.59 gram) with design",
    "address" : "Road Number 34,Madhapur",
    "cust":"4.5"
},
{
  "img": "assets/images/p1.svg",
  "price": "26,569",
  "name": "Mr & Mrs Gold Couple Diamond Band",
  "address" : "Road Number 34,Madhapur",
  "cust":"3.5"
},  {
  "img": "assets/images/p2.svg",
  "price": "26,569",
  "name": "Rings",
  "address" : "Road Number 34,Madhapur",
  "cust":"5"
  },
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
