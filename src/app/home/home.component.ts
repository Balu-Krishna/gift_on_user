import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;

  dynamicSlides = [
    {
      id: 1,
      src: 'assets/images/offer1.svg',
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: 2,
      src: 'assets/images/offer2.svg',
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: 3,
      src: 'assets/images/offer3.svg',
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: 4,
      src: 'assets/images/offer1.svg',
      alt: 'Side 4',
      title: 'Side 4',
    },
    {
      id: 5,
      src: 'assets/images/offer2.svg',
      alt: 'Side 5',
      title: 'Side 5',
    },
  ];
  stores = [
    {
      img: 'assets/images/image1.png',
      rating: '4',
      name: 'Orchids Gallery',
      address: 'Road Number 34,Madhapur',
      cust: '2000+ happy customers',
    },
    {
      img: 'assets/images/image2.png',
      rating: '4',
      name: 'Orchids Gallery',
      address: 'Road Number 34,Madhapur',
      cust: '2000+ happy customers',
    },
    {
      img: 'assets/images/image3.png',
      rating: '4',
      name: 'Home Accessories and Gifts in Cairo',
      address: 'Road Number 34,Madhapur',
      cust: '2050+ happy customers',
    },
    {
      img: 'assets/images/image4.png',
      rating: '4',
      name: 'Chroma Electronics',
      address: 'Road Number 34,Madhapur',
      cust: '1000+ happy customers',
    },
    {
      img: 'assets/images/image5.png',
      rating: '3.2',
      name: 'Baloons Unlimited (Beeramguda)',
      address: 'Road Number 34,Madhapur',
      cust: '2000+ happy customers',
    },
    {
      img: 'assets/images/image6.png',
      rating: '3.5',
      name: 'Interior Design Accessories Shop',
      address: 'Road Number 34,Madhapur',
      cust: '2000+ happy customers',
    },
    {
      img: 'assets/images/image7.png',
      rating: '5',
      name: 'Archies Pinkland Gallery',
      address: 'Road Number 34,Madhapur',
      cust: '2000+ happy customers',
    },
    {
      img: 'assets/images/image8.png',
      rating: '3',
      name: 'Woodland Shoes & Apparel',
      address: 'Road Number 34,Madhapur',
      cust: '2000+ happy customers',
    },
  ];
  testimonials = [
    {
      img: 'assets/images/Ellipse.svg',
      content:
        '1“ Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown”499',
      name: 'Dr. Suresh Madivada',
      designation: 'Private Employee',
    },
    {
      img: 'assets/images/Ellipse.svg',
      content:
        '1“ Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown”499',
      name: 'Josh',
      designation: 'cardiac surgeon',
    },
    {
      img: 'assets/images/Ellipse.svg',
      content:
        '1“ Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown”499',
      name: 'Dr. Suresh Madivada',
      designation: 'Private Employee',
    },
    {
      img: 'assets/images/Ellipse.svg',
      content:
        '1“ Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown”499',
      name: 'Josh',
      designation: 'cardiac surgeon',
    },
    {
      img: 'assets/images/Ellipse.svg',
      content:
        '1“ Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown”499',
      name: 'Dr. Suresh Madivada',
      designation: 'Private Employee',
    },
    {
      img: 'assets/images/Ellipse.svg',
      content:
        '1“ Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown”499',
      name: 'Josh',
      designation: 'cardiac surgeon',
    },
    {
      img: 'assets/images/Ellipse.svg',
      content:
        '1“ Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown”499',
      name: 'Dr. Suresh Madivada',
      designation: 'Private Employee',
    },
    {
      img: 'assets/images/Ellipse.svg',
      content:
        '1“ Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown”499',
      name: 'Josh',
      designation: 'cardiac surgeon',
    },
  ];
  Products = [
    {
      img: 'assets/images/image26.svg',
      price: '1499',
      name: 'Faaddiction Mens Casual Shirt Printed Rayon ',
      address: 'Road Number 34,Madhapur',
      cust: '500+ bought this',
    },
    {
      img: 'assets/images/image27.svg',
      price: 'Start from 499',
      name: 'Soft Teddy Bear',
      address: 'Road Number 34,Madhapur',
      cust: '500+ bought this',
    },
    {
      img: 'assets/images/image43.svg',
      price: '22,477',
      name: 'Rings',
      address: 'Road Number 34,Madhapur',
      cust: '500+ bought this',
    },
    {
      img: 'assets/images/image44.svg',
      price: '450',
      name: "TLF Men's Casual Printed Multi Color Linen Cotton...",
      address: 'Road Number 34,Madhapur',
      cust: '500+ bought this',
    },
    {
      img: 'assets/images/image43.svg',
      price: '22,477',
      name: 'Rings',
      address: 'Road Number 34,Madhapur',
      cust: '500+ bought this',
    },
  ];
  constructor(private notifyService: ToastrService) {}
  testOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    margin: 10,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 0.5,
      },
      400: {
        items: 1.3,
      },
      760: {
        items: 1.5,
      },
      1000: {
        items: 2,
      },
    },
    nav: true,
  };
  productOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    margin: 10,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 2.5,
      },
      1000: {
        items: 2.5,
      },
    },
    nav: true,
  };
  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
  };
  addSlide() {
    this.slides.push(488);
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }
  showToasterSuccess() {
    this.notifyService.success('Item Added to cart !!', '');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
  ngOnInit(): void {}
}
