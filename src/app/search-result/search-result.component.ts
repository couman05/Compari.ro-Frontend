import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../_model/product.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "../_services/product.service";
import {NgForm} from "@angular/forms";
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
    @Input() recievedData: any;

    products: Product[] = [];
    filteredProducts: Product[] = [];
    categories: string[] = [];
    selectedCategory: string = '';
  constructor(private searchService: SearchService, private productService: ProductService) { }



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
