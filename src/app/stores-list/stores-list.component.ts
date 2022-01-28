import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css']
})
export class StoresListComponent implements OnInit {

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
  stores = [
    {
      "img": "assets/images/image1.png",
      "rating": "4",
      "name": "Orchids Gallery",
      "address" : "Road Number 34,Madhapur",
      "cust":"2000+ happy customers"
  },
  {
    "img": "assets/images/image2.png",
    "rating": "4",
    "name": "Orchids Gallery",
    "address" : "Road Number 34,Madhapur",
    "cust":"2000+ happy customers"
},
{
  "img": "assets/images/image3.png",
  "rating": "4",
  "name": "Home Accessories and Gifts in Cairo",
  "address" : "Road Number 34,Madhapur",
  "cust":"2050+ happy customers"
},
{
"img": "assets/images/image4.png",
"rating": "4",
"name": "Chroma Electronics",
"address" : "Road Number 34,Madhapur",
"cust":"1000+ happy customers"
},    {
"img": "assets/images/image5.png",
"rating": "3.2",
"name": "Baloons Unlimited (Beeramguda)",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
},    {
"img": "assets/images/image6.png",
"rating": "3.5",
"name": "Interior Design Accessories Shop",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
},
{
"img": "assets/images/image7.png",
"rating": "5",
"name": "Archies Pinkland Gallery",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
},    {
"img": "assets/images/image8.png",
"rating": "3",
"name": "Woodland Shoes & Apparel",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
}
];
}
