import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../_services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId: string;
  productForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.initForm();
    this.loadProductData();
  }
  initForm() {
    this.productForm = this.fb.group({
      site: [''], // Add more form controls for other fields
      title: [''],
      price: [''],
      // Add form controls for other fields like price, link, etc.
    });
  }

  onSubmit() {
    const updatedFields = this.productForm.value;
    this.productService.updateProduct(this.productId, updatedFields).subscribe(
        (data) => {
          console.log('Product updated successfully:', data);
          // Handle success, e.g., show a success message, navigate to another page, etc.
        },
        (error) => {
          console.error('Error updating product:', error);
          // Handle error, e.g., show an error message
        }
    );
  }
  loadProductData() {
    // Call your productService to get the product data by ID
    this.productService.getProductById(this.productId).subscribe(
        (product) => {
          // Prefill the form with the retrieved product data
          this.productForm.patchValue(product);
        },
        (error) => {
          console.error('Error loading product data:', error);
          // Handle error, e.g., show an error message
        }
    );
  }
}
