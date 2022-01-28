import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dynamicSlides = [
    {
      id: 1,
      src:'assets/images/G-O-1.svg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'assets/images/G-0-2.svg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'assets/images/G-O-1.svg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'assets/images/G-0-2.svg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'assets/images/G-O-1.svg',
      alt:'Side 5',
      title:'Side 5'
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 2.7
      }
    },
    nav: true
  };
  stores = [
    {
      "img": "assets/images/mb-1.jpg",
      "rating": "4",
      "name": "Sangeetha Mobiles & Accessories",
      "address" : "Road Number 34,Madhapur",
      "cust":"2000+ happy customers"
  },
  {
    "img": "assets/images/mb-2.jpg",
    "rating": "4",
    "name": "Vasavi Communications",
    "address" : "Road Number 34,Madhapur",
    "cust":"2000+ happy customers"
},
{
  "img": "assets/images/mb-3.jpg",
  "rating": "4",
  "name": "Technovision Mobile Store",
  "address" : "Road Number 34,Madhapur",
  "cust":"2050+ happy customers"
},
{
"img": "assets/images/mb-4.jpg",
"rating": "4",
"name": "Vasavi Communications",
"address" : "Road Number 34,Madhapur",
"cust":"1000+ happy customers"
},    {
"img": "assets/images/mb-1.jpg",
"rating": "3.2",
"name": "Baloons Unlimited (Beeramguda)",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
},    {
"img": "assets/images/mb-2.jpg",
"rating": "3.5",
"name": "Technovision Mobile Store",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
},
{
"img": "assets/images/mb-3.jpg",
"rating": "5",
"name": "Sangeetha Mobiles & Accessories",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
},    {
"img": "assets/images/mb-4.jpg",
"rating": "3",
"name": "Vasavi Communications",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
}
];
}
