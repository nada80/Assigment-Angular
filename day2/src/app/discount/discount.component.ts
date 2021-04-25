import { Component, OnInit } from '@angular/core';
import { DiscountOffer } from '../Interfaces/discount-offer';
import { IProduct } from '../Interfaces/iproduct';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  ProductList:IProduct[];
  discount:DiscountOffer;
  constructor() { 
    this.ProductList=this.ProductList = [
      {Id: 1, Name: 'Lenovo X230', Quantity: 1, Price: 100,Img:'1.jpg'},
    {Id: 2, Name: 'Dell Latitude', Quantity: 2, Price: 200,Img:"1.jpg"},
    {Id: 3, Name: 'Lenovo Tab 2', Quantity: 10, Price: 1000, Img:"1.jpg"},
    {Id: 4, Name: 'IPad', Quantity: 20, Price: 2000, Img:"1.jpg"},
    {Id: 5, Name: 'Smasung S10', Quantity: 30, Price: 300, Img:"1.jpg"},
    {Id: 6, Name: 'Iphone 9', Quantity: 300, Price: 3000, Img:"1.jpg"}
  ];
  this.discount=DiscountOffer["10%"];
}

  ngOnInit(): void {
  }

}
