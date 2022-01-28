import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashionproducts',
  templateUrl: './fashionproducts.component.html',
  styleUrls: ['./fashionproducts.component.css']
})
export class FashionproductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Products = [
    {
      "img": "assets/images/f-p-1.jpg",
      "price": "26,569",
      "name": "Porto - Slim Fit Printed Men Shirt - Beige",
      "address" : "Road Number 34,Madhapur",
      "cust":"4.5"
  },
  {
    "img": "assets/images/f-p-2.jpg",
    "price": "26,569",
    "name": "Comfy Graceful Men Shirts",
    "address" : "Road Number 34,Madhapur",
    "cust":"3.5"
  },
  {
  "img": "assets/images/f-p-3.jpg",
  "price": "26,569",
  "name": "Comfy Graceful Men Shirts",
  "address" : "Road Number 34,Madhapur",
  "cust":"5"
  },
  {
    "img": "assets/images/f-p-4.jpg",
    "price": "26,569",
    "name": "Porto - Slim Fit Printed Men Shirt - Beige",
    "address" : "Road Number 34,Madhapur",
    "cust":"4.5"
},
{
  "img": "assets/images/f-p-5.jpg",
  "price": "26,569",
  "name": "Cobla - Block Slim Fit Men Shirt Blue",
  "address" : "Road Number 34,Madhapur",
  "cust":"3.5"
},  {
  "img": "assets/images/f-p-1.jpg",
  "price": "26,569",
  "name": "Comfy Graceful Men Shirts",
  "address" : "Road Number 34,Madhapur",
  "cust":"5"
  },
  
  ];
}
