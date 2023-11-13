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
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            }
        );


  }
}
