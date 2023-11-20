import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../_model/product.model";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId: string;
  product: Product;
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id']; // Get the product ID from the route parameter
      this.fetchProductDetails();
    });
  }

  fetchProductDetails() {
    this.http.get<Product>('http://localhost:9090/getProductById/' + this.productId)
        .subscribe(
            (data) => {
              this.product = data; // Assign the fetched product to the product variable
            },
            (error) => {
              console.error('Error fetching product details:', error);
            }
        );
  }


}
