import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../_model/product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private updateUrl = 'http://localhost:9090/admin';
  private productUrl = 'http://localhost:9090/getProductById';
  private deleteUrl = 'http://localhost:9090/deleteProduct';

  constructor(private httpClient: HttpClient) { }

  public getAllProducts()
  {
    return this.httpClient.get<Product[]>("http://localhost:9090/getAllProducts");
  }

  getProductById(id: string): Observable<any> {
    const url = `${this.productUrl}/${id}`;
    return this.httpClient.get(url);
  }

  updateProduct(id:String,updatedFields:any):Observable<any>{

    const url = `${this.updateUrl}/${id}`;
    return this.httpClient.put(url, updatedFields);

  }

  deleteProduct(id:String):Observable<any>{

    const url = `${this.deleteUrl}/${id}`;
    return this.httpClient.delete<void>(url);

  }
}
