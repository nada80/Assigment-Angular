import { Component, OnInit } from '@angular/core';
import { DiscountOffer } from '../Interfaces/discount-offer';
import { IProduct } from '../Interfaces/iproduct';

@Component({
  selector: 'app-no-discount',
  templateUrl: './no-discount.component.html',
  styleUrls: ['./no-discount.component.scss']
})
export class NoDiscountComponent implements OnInit {

  ProductList: IProduct[] = [];
  Discount:DiscountOffer;

  constructor() { 
    this.ProductList = [{Id: 1, Name: 'ABC X230', Quantity: 1, Price: 100,Img:"1.jpg"},
    {Id: 2, Name: 'ABC2 Latitude', Quantity: 2, Price: 200,Img:"1.jpg"},
    {Id: 3, Name: 'Lenovo Tab 2', Quantity: 10, Price: 1000, Img:"1.jpg"}],
    this.Discount = DiscountOffer['ZeroDiscount'];
  }

  ngOnInit(): void {
  }

}
