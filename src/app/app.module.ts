import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { SearchBarComponent } from './search-bar/search-bar.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { RegisterComponent } from './register/register.component';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';

import {ProductService} from "./_services/product.service";
import { SearchResultComponent } from './search-result/search-result.component';
import { UpdateProductComponent } from './update-product/update-product.component';

// import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    RegisterComponent,
    ShowProductDetailsComponent,

    SearchResultComponent,
    UpdateProductComponent,
    ProductDetailComponent,
    WishlistComponent

  ],
    imports: [
        // MatSnackBarModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule

    ],
  providers: [

    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
      ProductService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
