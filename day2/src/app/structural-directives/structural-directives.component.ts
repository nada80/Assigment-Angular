import { Component, OnInit } from '@angular/core';
import { DiscountOffer } from '../Interfaces/discount-offer';
import { ICategory } from '../Interfaces/icategory';
import { IProduct } from '../Interfaces/iproduct';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {



   Discount:DiscountOffer;
  CategoryList:ICategory[];
  ProductList:IProduct[];
  constructor() {
    this.Discount=DiscountOffer["ZeroDiscount"];
    this.CategoryList=[{
      Id:1,
      Name:"cat1"
     },{
      Id:2,
      Name:"cat2"
     },{
      Id:3,
      Name:"cat3"
     }];
     this.ProductList=[{
      Id:100,
      Name :"p1",
      Quantity : 3,
      Price : 2100,
        Img : "1.jpg"},{
          Id:200,
          Name :"p2",
          Quantity : 4,
          Price : 3000,
            Img : "2.jpg"}];
   }

  ngOnInit(): void {
  }


}
