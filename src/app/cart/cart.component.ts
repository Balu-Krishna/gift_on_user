import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Products = [
    {
      "img": "assets/images/image26.svg",
      "price": "1499",
      "name": "Faaddiction Mens Casual Shirt Printed Rayon ",
      "address" : "Road Number 34,Madhapur",
      "cust":"500+ bought this"
  },
  {
    "img": "assets/images/image27.svg",
    "price": "Start from 499",
    "name": "Soft Teddy Bear",
    "address" : "Road Number 34,Madhapur",
    "cust":"500+ bought this"
  },
  {
  "img": "assets/images/image43.svg",
  "price": "22,477",
  "name": "Rings",
  "address" : "Road Number 34,Madhapur",
  "cust":"500+ bought this"
  },
  {
  "img": "assets/images/image44.svg",
  "price": "450",
  "name": "TLF Men's Casual Printed Multi Color Linen Cotton...",
  "address" : "Road Number 34,Madhapur",
  "cust":"500+ bought this"
  },
  {
  "img": "assets/images/image43.svg",
  "price": "22,477",
  "name": "Rings",
  "address" : "Road Number 34,Madhapur",
  "cust":"500+ bought this"
  },
  {
    "img": "assets/images/image26.svg",
    "price": "1499",
    "name": "Faaddiction Mens Casual Shirt Printed Rayon ",
    "address" : "Road Number 34,Madhapur",
    "cust":"500+ bought this"
},
{
  "img": "assets/images/image27.svg",
  "price": "Start from 499",
  "name": "Soft Teddy Bear",
  "address" : "Road Number 34,Madhapur",
  "cust":"500+ bought this"
},
{
  "img": "assets/images/image26.svg",
  "price": "1499",
  "name": "Faaddiction Mens Casual Shirt Printed Rayon ",
  "address" : "Road Number 34,Madhapur",
  "cust":"500+ bought this"
},
{
"img": "assets/images/image27.svg",
"price": "Start from 499",
"name": "Soft Teddy Bear",
"address" : "Road Number 34,Madhapur",
"cust":"500+ bought this"
},
{
"img": "assets/images/image43.svg",
"price": "22,477",
"name": "Rings",
"address" : "Road Number 34,Madhapur",
"cust":"500+ bought this"
},
{
"img": "assets/images/image44.svg",
"price": "450",
"name": "TLF Men's Casual Printed Multi Color Linen Cotton...",
"address" : "Road Number 34,Madhapur",
"cust":"500+ bought this"
},
{
"img": "assets/images/image43.svg",
"price": "22,477",
"name": "Rings",
"address" : "Road Number 34,Madhapur",
"cust":"500+ bought this"
}
  ];
}
