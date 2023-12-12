import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import {Observable} from "rxjs";
import {Product} from "../_model/product.model";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:9090';

  requestHeader_Authorization = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public register(registerData)
  {

    return this.httpclient.post(this.PATH_OF_API+'/registerNewUser',registerData,
        {
          headers:this.requestHeader_Authorization
        });
  }
  public login(loginData) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData,{
      headers:this.requestHeader_Authorization});
  }

  public forUser() {

    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    const  requestHeader = new HttpHeaders({Authorization : `Bearer ${this.userAuthService.getToken()}`});
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',

    });
  }

  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }

  getCurrentUserDetails(): Observable<any> {
    return this.httpclient.get<any>(`${this.PATH_OF_API}/getUserDetails`);
  }
  getDocumentsForCurrentUser(userId: string): Observable<Product[]> {
    return this.httpclient.get<Product[]>(`${this.PATH_OF_API}/documents/${userId}`);
  }

}
