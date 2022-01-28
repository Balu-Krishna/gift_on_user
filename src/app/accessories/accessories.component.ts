import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  dynamicSlides = [
    {
      id: 1,
      src:'assets/images/offer1.svg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'assets/images/offer2.svg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'assets/images/offer3.svg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'assets/images/offer1.svg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'assets/images/offer2.svg',
      alt:'Side 5',
      title:'Side 5'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
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
        items: 2
      },
      1000: {
        items: 2.5
      }
    },
    nav: true
  };
  stores = [
    {
      "img": "assets/images/jw1.svg",
      "rating": "4",
      "name": "Orchids Gallery",
      "address" : "Road Number 34,Madhapur",
      "cust":"2000+ happy customers"
  },
  {
    "img": "assets/images/jw2.svg",
    "rating": "4",
    "name": "Orchids Gallery",
    "address" : "Road Number 34,Madhapur",
    "cust":"2000+ happy customers"
},
{
  "img": "assets/images/jw.svg",
  "rating": "4",
  "name": "Home Accessories and Gifts in Cairo",
  "address" : "Road Number 34,Madhapur",
  "cust":"2050+ happy customers"
},
{
"img": "assets/images/jw1.svg",
"rating": "4",
"name": "Chroma Electronics",
"address" : "Road Number 34,Madhapur",
"cust":"1000+ happy customers"
},    {
"img": "assets/images/jw.svg",
"rating": "3.2",
"name": "Baloons Unlimited (Beeramguda)",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
},    {
"img": "assets/images/jw2.svg",
"rating": "3.5",
"name": "Interior Design Accessories Shop",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
},
{
"img": "assets/images/jw1.svg",
"rating": "5",
"name": "Archies Pinkland Gallery",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
},    {
"img": "assets/images/jw.svg",
"rating": "3",
"name": "Woodland Shoes & Apparel",
"address" : "Road Number 34,Madhapur",
"cust":"2000+ happy customers"
}
];
}
