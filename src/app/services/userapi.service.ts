import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  api = `http://localhost:3000/api/user/`
  constructor(private http: HttpClient) { }
  
  RegisterApi(Data:any):Observable<any>{
return this.http.post(`${this.api}register`, Data)
  }
  LoginApi(Data:any):Observable<any>{
  return  this.http.post(`${this.api}login`, Data)
      }
  MyProfile():Observable<any>{
    return  this.http.get(`${this.api}myprofile`)
        }  
EditMyProfile(Data:any):Observable<any>{
  return  this.http.post(`${this.api}edit` ,Data)
      }  
      AddToMyCart(id:string):Observable<any>{
return this.http.post(`${this.api}addtocart/${id}` , {})
      }
      // router.get("/myprofile", auth ,userController.Myprofile) done
      // router.get("/edit", auth ,userController.EditMyProfile) done
      // router.get("/updatepassword", auth ,userController.editPassword) done
      
      // router.get("/forgetpassword/:id" ,userController.ForgetPassword) // edited in controller 
      // router.get("/addtocart/:id" , auth, userController.AddToCart)
      // router.get("/removefromcart/:id" , auth,userController.RemoveFromCart)
      // router.post('/uploadimg', auth ,upload.single('img'), userController.UploadImg)
      // router.post('/purchase' , auth ,userController.Purchase)   
  // changepassword(Data:any):Observable<any>{

  // }
      
}
