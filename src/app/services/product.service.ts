import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  api = `http://localhost:3000/api/product/`;

  constructor(private http: HttpClient) { }


  add_prodcut(Data: any): Observable<any> {
    return this.http.post(`${this.api}add_prodcut`, Data)
  }

  // LoginApi(Data: any): Observable<any> {
  //   return this.http.post(`${this.api}login`, Data)
  // }



}
