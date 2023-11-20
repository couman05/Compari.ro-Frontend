import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchInputSource = new Subject<string>();
  searchInput$ = this.searchInputSource.asObservable();
  private wishlistUrl = 'http://localhost:9090/addToWishlist';

  constructor(private httpClient: HttpClient) { }

  sendSearchInput(input: string) {
    this.searchInputSource.next(input);
  }

  addToWishlist(productId:String):Observable<any>{

    const url = `${this.wishlistUrl}/${productId}`;
    return this.httpClient.post<void>(url, "");

  }
}
