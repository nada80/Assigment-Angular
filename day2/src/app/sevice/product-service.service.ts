import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Interfaces/iproduct';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  // ProductList:IProduct[]=[];
  constructor(private http:HttpClient) {}

  url="../../assets/data/product.json";

  GetAllProductes():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.url);
    // return this.ProductList;
  }
  // getProductById(id:any):any{
  //   for(var i=0;i<this.ProductList.length;i++){
  //     if(id==this.ProductList[i].Id)
  //       return this.ProductList[i];
  //   }
  //    if(isNaN(id))
  //       return null; 
  // }
  
}
