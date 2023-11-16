import { Component, OnInit } from '@angular/core';
import {ProductService} from "../_services/product.service";
// import {SearchService} from "../_services/search.service";
import {Product} from "../_model/product.model";
import {HttpErrorResponse} from "@angular/common/http";

import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";


@Component({
    selector: 'app-show-search-details',
    templateUrl: './show-product-details.component.html',
    styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {


    products: Product[] = [];
// mcuc

  constructor(private productService:ProductService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
    

public getAllProducts(searchkeyword : string="")
    {
        this.productService.getAllProducts().subscribe(
            (resp:Product[])=>{
                console.log(resp);
                this.products = resp;
            },(error:HttpErrorResponse)=>{
                console.log(error);
            }
        );
        if(searchkeyword != "")
        {
            this.searchByKeyword(searchkeyword);
        }
    }

    searchByKeyword(searchkeyword : string=""){

        console.log(searchkeyword);
        this.products=[];

        this.productService.searchByKeyword(searchkeyword).subscribe(
            (resp:Product[])=>{
                console.log(resp);
                this.products = resp;
            },(error:HttpErrorResponse)=>{
                console.log(error);
            }
        );

        if(searchkeyword == "")
        {
            this.getAllProducts();
        }

    }
 
    redirectToUpdate(productId: string) 
    {
        this.router.navigate(['/updateProductDetails', productId]);
    }

    deleteProduct(productId: string): void {
        // Call your service to delete the product
        this.productService.deleteProduct(productId).subscribe(() => {
            // If successful, remove the deleted product from the local array
            this.products = this.products.filter(product => product.id !== productId);
        }, error => {
            console.error('Error deleting product:', error);
        });
    }


}
