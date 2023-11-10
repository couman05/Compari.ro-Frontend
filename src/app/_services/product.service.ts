import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../_model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getAllProducts()
  {
    return this.httpClient.get<Product[]>("http://localhost:9090/getAllProducts");
  }
}
