import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message;
  user:any;
  constructor(private userService: UserService,
              private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.forUser();
    this.getUserDetails();
  }

  forUser() {
    this.userService.forUser().subscribe(
      (response) => {
        console.log(response);
        this.message = response;
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }

  getUserDetails() {
    this.httpClient.get<any>('http://localhost:9090/getUserDetails').subscribe(
        (response) => {
          this.user = response;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
    );
  }
}
