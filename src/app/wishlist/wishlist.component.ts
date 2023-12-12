import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user.service";
import {UserComponent} from "../user/user.component";
import {Product} from "../_model/product.model";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  username: string = '';
  products: Product[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUserDetails().subscribe(user => {
      this.username = user.userName;
      this.userService.getDocumentsForCurrentUser(this.username).subscribe(products => {
        this.products = products;
      });
    });


  }

}
