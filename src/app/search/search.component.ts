import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
