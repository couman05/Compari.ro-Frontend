import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import {RegisterComponent} from "./register/register.component";
import {ShowProductDetailsComponent} from "./show-product-details/show-product-details.component";

import {HeaderComponent} from "./header/header.component";
import {SearchResultComponent} from "./search-result/search-result.component";

import {UpdateProductComponent} from "./update-product/update-product.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'register',component:RegisterComponent},
  { path: 'showProductDetails',component:ShowProductDetailsComponent},

  { path: 'searchByKeyword',component:HeaderComponent},
  { path: 'searchResult',component:SearchResultComponent}
  { path: 'updateProductDetails/:id',component:UpdateProductComponent,canActivate:[AuthGuard], data:{roles:['Admin']} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
