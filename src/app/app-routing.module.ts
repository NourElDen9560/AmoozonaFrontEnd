import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { LoginComponent } from './pages/login/login.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { EditproductComponent } from './pages/product/edit/editproduct.component';
import { ListallComponent } from './pages/product/listall/listall.component';
import { ListallproductComponent } from './pages/product/listallproduct/listallproduct.component';
//import { ListallComponent } from './pages/product/listall/listall.component';
//import { EditproductComponent } from './pages/product/edit/editproduct.component';

import { SingleComponent } from './pages/product/single/single.component';
import { RegisterComponent } from './pages/register/register.component';
import { UploadImgComponent } from './pages/upload-img/upload-img.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path:'login' , component:LoginComponent} , 
  {path:'addproduct',component:AddproductComponent},
{path:'single/:id', component:SingleComponent},
{path:'',component:ListallproductComponent} ,
{path:'myaccount',component:MyprofileComponent}, 
{path:'edit_product/:id', component:EditproductComponent} ,
{path:'changepassword', component:ChangepasswordComponent},
{path:'uploadimg',component:UploadImgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
