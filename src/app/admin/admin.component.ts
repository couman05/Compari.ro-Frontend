import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message;
  user:any;
  constructor(private userService:UserService,
              private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.forAdmin();
    this.getUserDetails();
  }

  forAdmin() {
    this.userService.forAdmin().subscribe(
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
