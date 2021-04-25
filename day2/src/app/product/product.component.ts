import { Component, OnInit } from '@angular/core';
import { DiscountOffer } from '../Interfaces/discount-offer';
import { ICategory } from '../Interfaces/icategory';
import { IProduct } from '../Interfaces/iproduct';
import { ProductServiceService } from '../sevice/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  Discount:DiscountOffer= DiscountOffer.ZeroDiscount;
  StoreName:string='My Store';
  Storelogo:string="../../assets/client-3.png";
  ProductList:IProduct[]=[];
  ProductListByID:IProduct[]=[];
  CategoryList:ICategory[]=[];
  ClientName:string="Ahmed";
  IsPurchased:boolean=false;



  
  constructor( private  productServices:ProductServiceService , private activatedRoute:ActivatedRoute,private router:Router) {
   
    this.CategoryList=[
      {Id:1 , Name: "cat1"},    
      {Id:2 , Name: "cat2"},
      {Id:3 , Name: "cat3"}

    ]
   }
   show(IsPurshased:string){
    if(IsPurshased=="true")
        this.IsPurchased=false
    else
      this.IsPurchased=true
      this.Discount=DiscountOffer['10%'];
  }
  //  renderValues()
  //  {
  //       //  this.ProductList=this.productServices.GetAllProductes();
  //  }
  //  renderValuesById(id:string){​​​​​​​​
  //  this.ProductList=[];
  //  var prod= this.productServices.getProductById(id);
  //  if(prod!=null){​​​​​​​​
  //  this.ProductList.push(prod);
  //    }​​​​​​​​ 
  //  }
  //  ToggleProduct():void{
  //    this.IsPurchased=!this.IsPurchased;
  //  }
  WithDiscount(){
    this.router.navigate(['withDiscount'],{relativeTo:this.activatedRoute})
    
  }
  WithoutDiscount()
  {
    this.router.navigate(['withOutDiscount'],{relativeTo:this.activatedRoute})
   
  }
  ngOnInit(): void {
    this.productServices.GetAllProductes().subscribe(
      data=>{
        this.ProductList=data;
      }
    )
    // this.ProductList=this.productServices.GetAllProducts();
    // this.ProductListByID=this.productServices.GetProductById(this.proid);
  }

}
