import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleComponent } from './pages/product/single/single.component';
import { HomeComponent } from './pages/home/home.component';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { ListallproductComponent } from './pages/product/listallproduct/listallproduct.component';
import { AuthInterceptor } from './services/interceptor/auth.interceptor';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { EditproductComponent } from './pages/product/edit/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AddproductComponent,
    ListallproductComponent ,
    SingleComponent,
    MyprofileComponent ,EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule , 
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS , useClass:AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
