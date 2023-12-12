import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
import {Product} from "../_model/product.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "../_services/product.service";
import {SearchService} from "../_services/search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
    private productService:ProductService,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}


  onSearch(input: string) {
    this.searchService.sendSearchInput(input); // Send the input to the service
  }

  ngOnInit(): void {

  }

  products: Product[] = [];
  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/']);
  }
  public isAdmin()
  {
    return this.userAuthService.isAdmin();
  }
  public isUser()
  {
    return this.userAuthService.isUser();
  }




}
