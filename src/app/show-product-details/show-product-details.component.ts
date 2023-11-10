import { Component, OnInit } from '@angular/core';
import {ProductService} from "../_services/product.service";
import {Product} from "../_model/product.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts()
  {
    this.productService.getAllProducts().subscribe(
        (resp:Product[])=>{
          console.log(resp);
          this.products = resp;
        },(error:HttpErrorResponse)=>{
          console.log(error);
        }
    );
  }

}
