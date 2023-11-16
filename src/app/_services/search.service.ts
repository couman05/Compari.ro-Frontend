import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchInputSource = new Subject<string>();
  searchInput$ = this.searchInputSource.asObservable();

  sendSearchInput(input: string) {
    this.searchInputSource.next(input);
  }
}
