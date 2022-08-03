import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({selector: 'app-listall',templateUrl: './listall.component.html',styleUrls: ['./listall.component.css']})

export class ListallComponent implements OnInit {

  products:any[] = [];
  constructor(private data:ProductService , private router: Router) { }

  listall(){
    this.data.list_all_products().subscribe(
      res=> {
        this.products = res.data; 
        console.log("test"+ this.products)
      },
      err=>console.log(err),
      ()=>{this.router.navigate(['/']);}
    )}


  ngOnInit(): void { this.listall()  }

}
