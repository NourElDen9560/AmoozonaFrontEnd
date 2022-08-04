import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserapiService {
  api = `http://localhost:3000/api/user/`
  constructor(private http: HttpClient) { }

  RegisterApi(Data: any): Observable<any> {
    return this.http.post(`${this.api}register`, Data)
  }
  LoginApi(Data: any): Observable<any> {
    return this.http.post(`${this.api}login`, Data)
  }

  MyProfile(): Observable<any> {
    return this.http.get(`${this.api}myprofile`)
  }
  AddToMyCart(id: string): Observable<any> {
    return this.http.post(`${this.api}addtocart/${id}`, {})
  }

  // changepassword(Data:any):Observable<any>{

  // }

}
