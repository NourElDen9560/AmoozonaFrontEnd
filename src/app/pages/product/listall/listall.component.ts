import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({selector: 'app-listall',templateUrl: './listall.component.html',styleUrls: ['./listall.component.css']})

export class ListallComponent implements OnInit {
  filterproduct='';
  products:any[] = [];
  
  ArrOfData:any[] = [];
 
  constructor(private data:ProductService , private router: Router) { }

  

  listall(){
    this.data.list_all_products().subscribe(
      res=> {
        console.log(res.data);
        this.products = res.data; 
      },
      err=>console.log(err),
      ()=>{
        this.ArrOfData = this.products;
      }
    )}


  ngOnInit(): void { this.listall()  }

}
