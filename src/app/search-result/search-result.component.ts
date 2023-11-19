import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../_model/product.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "../_services/product.service";
import {NgForm} from "@angular/forms";
import { SearchService } from '../_services/search.service';
import {Router} from "@angular/router";
// import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],

})
export class SearchResultComponent implements OnInit {
    @Input() recievedData: any;

    products: Product[] = [];
  constructor(private searchService: SearchService, private productService: ProductService, private router:Router ){ }



  ngOnInit(): void {
      this.searchService.searchInput$.subscribe((searchKeyword: string) => {
          this.searchByKeyword(searchKeyword);
      });
  }


    public searchByKeyword(searchKeyword: string) {
        this.productService.searchByKeyword(searchKeyword).subscribe(
            (resp: Product[]) => {
                this.products = resp;
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            }
        );


  }

    addToWishlist(productId: string)
    {
        this.searchService.addToWishlist(productId).subscribe(() => {
            // If successful, remove the deleted product from the local array
            this.products = this.products.filter(product => product.id !== productId);

            console.log("igenigen")
            // this.snackBar.open('Product added to wishlist', 'Dismiss', {
            //     duration: 3000,  // Specify the duration in milliseconds
            // });

        }, error => {
            console.error('Error adding product to wishlist:', error);
        });
    }


}
