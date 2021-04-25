import { Component, ViewChild } from '@angular/core';

import { IProduct } from './Interfaces/iproduct';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild(ProductComponent) productsComponent:ProductComponent;
  // renderval()  
  //   {
  //     this.productsComponent.renderValues();
      
  //   }
  //   rendervalById(id:string)  
  //   { 
  //     this.productsComponent.renderValuesById(id);
  //   }
}
