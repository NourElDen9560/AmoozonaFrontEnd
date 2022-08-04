import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listallproduct',
  templateUrl: './listallproduct.component.html',
  styleUrls: ['./listallproduct.component.css']
})
export class ListallproductComponent implements OnInit {
  filterproduct='';
  products:any[] = [];
  constructor(private data:ProductService , private router: Router) { }
  ArrOfData:any[] = [];
  listall(){
    this.data.list_all_products().subscribe(
      res=> {
        console.log(res.data);
        this.products = res.data; 
        console.log("test"+ this.products[0])
      },
      err=>console.log(err),
      ()=>{
        this.ArrOfData = this.products; //
      }
    )}
     //
Filtration(){
  console.log(this.filterproduct)
  console.log(this.products)
  if(this.filterproduct)
  this.ArrOfData = this.products.filter(product=>product.title.includes(this.filterproduct))
  else 
  this.ArrOfData = this.products
}

  ngOnInit(): void { this.listall()  }



}
