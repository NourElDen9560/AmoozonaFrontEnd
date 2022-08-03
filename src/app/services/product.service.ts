import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  api = `http://localhost:3000/api/product/`;

  constructor(private http: HttpClient) { }


  add_prodcut(Data: any): Observable<any> {return this.http.post(`${this.api}add_prodcut`, Data)}
  list_all_products(): Observable<any> {return this.http.get(`${this.api}list_all_products`)}

  get_product_by_id(id: number): Observable<any> {return this.http.get(`${this.api}get_product_by_id/${id}`)}
  update_product(Data: any): Observable<any> {return this.http.post(`${this.api}update_product`, Data)}
  delete_product(id: number): Observable<any> {return this.http.get(`${this.api}delete_product/${id}`)}
  get_product_by_name(name: string): Observable<any> {return this.http.get(`${this.api}get_product_by_name/${name}`)}
  get_product_by_category(category: string): Observable<any> {return this.http.get(`${this.api}get_product_by_category/${category}`)}
  get_product_by_brand(brand: string): Observable<any> {return this.http.get(`${this.api}get_product_by_brand/${brand}`)}
  get_product_by_price(price: number): Observable<any> {return this.http.get(`${this.api}get_product_by_price/${price}`)}
  get_product_by_quantity(quantity: number): Observable<any> {return this.http.get(`${this.api}get_product_by_quantity/${quantity}`)}
  get_product_by_details(details: string): Observable<any> {return this.http.get(`${this.api}get_product_by_details/${details}`)}
  get_product_by_image(image: string): Observable<any> {return this.http.get(`${this.api}get_product_by_image/${image}`)}
  get_product_by_title(title: string): Observable<any> {return this.http.get(`${this.api}get_product_by_title/${title}`)}




}
