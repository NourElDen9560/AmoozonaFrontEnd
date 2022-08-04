import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private api = `http://localhost:3000/api/product/`;
  public variable_to_transfer_between_model = 'Hello World';
  constructor(private http: HttpClient) { }

  add_prodcut(Data: any): Observable<any> {return this.http.post(`${this.api}add_prodcut`, Data)}
  list_all_products(): Observable<any> {return this.http.get(`${this.api}list_all_products`)}
  list_single_product(id: any): Observable<any> {return this.http.get(`${this.api}list_single_product/${id}`)}
  edit_product(id:any,Data: any): Observable<any> {return this.http.patch(`${this.api}edit_product/${id}`,Data)}
  delete_product(id:any): Observable<any> {return this.http.delete(`${this.api}delete_product/${id}`)}
  add_comment(id:any,Data:any): Observable<any> {console.log("comment "+ Data); return this.http.post(`${this.api}add_comment/${id}`,Data)}
  delete_comment(id:any,comment:any): Observable<any> {console.log("comment "+ comment); return this.http.delete(`${this.api}delete_comment/${id}/${comment}`)}

  
  //////////////////////////////////////////
  // get_product_by_name(name: string): Observable<any> {return this.http.get(`${this.api}get_product_by_name/${name}`)}
  // get_product_by_category(category: string): Observable<any> {return this.http.get(`${this.api}get_product_by_category/${category}`)}
  // get_product_by_brand(brand: string): Observable<any> {return this.http.get(`${this.api}get_product_by_brand/${brand}`)}
  // get_product_by_price(price: number): Observable<any> {return this.http.get(`${this.api}get_product_by_price/${price}`)}
  // get_product_by_quantity(quantity: number): Observable<any> {return this.http.get(`${this.api}get_product_by_quantity/${quantity}`)}
  // get_product_by_details(details: string): Observable<any> {return this.http.get(`${this.api}get_product_by_details/${details}`)}
  // get_product_by_image(image: string): Observable<any> {return this.http.get(`${this.api}get_product_by_image/${image}`)}
  // get_product_by_title(title: string): Observable<any> {return this.http.get(`${this.api}get_product_by_title/${title}`)}




}
