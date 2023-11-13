import { Component, OnInit } from '@angular/core';
import {ProductService} from "../_services/product.service";
// import {SearchService} from "../_services/search.service";
import {Product} from "../_model/product.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-show-search-details',
    templateUrl: './show-product-details.component.html',
    styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {

    products: Product[] = [];



    // searchedProduct: Product | null = null;
    constructor(private productService:ProductService, private route: ActivatedRoute ) { }

    ngOnInit(): void {
        this.getAllProducts();
        //     this.route.queryParams.subscribe(params => {
        //         const productText = params['productText']; // Assuming 'productId' is the parameter containing the product identifier
        //         if (productText) {
        //             this.searchForProduct(productText);
        //         }
        // });
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

    // searchForProduct(productId: string) {
    //     this.productService.searchForProduct(productId).subscribe(
    //         (product: Product) => {
    //             this.searchedProduct = product;
    //         },
    //         (error: HttpErrorResponse) => {
    //             console.log(error);
    //         }
    //     );
    // }



}
