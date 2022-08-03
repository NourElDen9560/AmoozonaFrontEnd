import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
 
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  products:any[] = [];
  constructor(private data:ProductService , private  _activated:ActivatedRoute , private router:Router) { }
  
  id:any= this._activated.snapshot.paramMap.get('id'); //get id parameter
  obj:any = {};

  delete_product(id:any){
    this.data.delete_product(id).subscribe(
      res=> { console.log(res); alert('product deleted successfully'); },
        err=>console.log(err),
       ()=>{ this.router.navigate(['/']);}
    )}

  listall(){
    this.data.list_single_product(this.id).subscribe(
      res=> {
        this.obj = res.data; 
        console.log("test"+ this.products)
      },
      err=>console.log(err),
       ()=>{}
    )}


  ngOnInit(): void { this.listall()  }
}
