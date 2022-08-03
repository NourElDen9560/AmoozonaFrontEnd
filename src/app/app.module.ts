import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
///////////// Product Component ///////////////
import { ListallComponent } from './pages/product/listall/listall.component';
import { SingleComponent } from './pages/product/single/single.component';
import { AddproductComponent } from './pages/product/add/addproduct.component';
import { EditproductComponent } from './pages/product/edit/editproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
////////////////////////////////
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,

    AddproductComponent,
    EditproductComponent,
    ListallComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule , 
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,MatInputModule,MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
