import { Component, OnInit } from '@angular/core';
import {ProductService} from "../_services/product.service";
import {UserService} from "../_services/user.service";
import {SearchService} from "../_services/search.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: string[] = [];
  products: any[] = [];
  filteredProducts: any[] = [];
  selectedCategory: string = '';
  hoveredCategory: string = '';
  constructor(private searchService: SearchService, private productService: ProductService, public userService: UserService,) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }
  getCategories(): void {
    this.productService.getCategories()
        .subscribe(categories => {
          this.categories = categories;
        });
  }
  getProducts(): void {
    this.productService.getAllProducts()
        .subscribe(products => {
          this.products = products;
          this.filteredProducts = products;
        });
  }
  filterProductsByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === '') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
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
  resetFilter(): void {
    this.filteredProducts = this.products;
    this.hoveredCategory = '';
  }
}
