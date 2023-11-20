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

    filteredProducts: Product[] = [];
    categories: string[] = [];
    selectedCategory: string = '';
 




  ngOnInit(): void {
      this.searchService.searchInput$.subscribe((searchKeyword: string) => {
          this.searchByKeyword(searchKeyword);
      });
  }


    public searchByKeyword(searchKeyword: string) {
        this.productService.searchByKeyword(searchKeyword).subscribe(
            (resp: Product[]) => {
                this.products = resp;
               // console.log(resp);
                this.filteredProducts=[...this.products]; // Initialize filtered products with all products
                this.categories=this.extractCategories(resp); // Extract categories from products
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



    public extractCategories(products: Product[]): string[] {
        const allCategories = products.map(product => product.category);
        return Array.from(new Set(allCategories)); // Get unique categories
    }

    public filterByCategory() {
        if (this.selectedCategory === '') {
            this.filteredProducts = [...this.products]; // Show all products if no category is selected
        } else {
            this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
        }
    }

}
