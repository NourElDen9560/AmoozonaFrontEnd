import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private data:ProductService , private router: Router) { }

  ngOnInit(): void {}
  ImdData= new FormGroup({
    img:new FormControl('' , Validators.required) 
    }) 

  Title:any
  NewImage:any
  getImage(event:any){
    this.NewImage = event.target.files[0]
  }
  add_product_from = new FormGroup({
   title: new FormControl('',[Validators.required,Validators.minLength(3)]),
   price: new FormControl('',[Validators.required]),
   Brand: new FormControl('',[Validators.required,Validators.minLength(3)]),
   quantity: new FormControl('',[Validators.required,Validators.minLength(3)]),
   details: new FormControl('',[Validators.required,Validators.minLength(3)]),
   img: new FormControl('')
 });

 get title() {return this.add_product_from.get('title');}
 get price() {return this.add_product_from.get('price');}
 get Brand() {return this.add_product_from.get('Brand');}
 get quantity() {return this.add_product_from.get('quantity');}
 get details() {return this.add_product_from.get('details');}
 get image() {return this.add_product_from.get('image');}

 AddProduct(){
 
  const Form = new FormData();
    Form.append("img" , this.NewImage , this.NewImage.name);
 console.log(Form)
   this.data.add_prodcut(this.add_product_from.value).subscribe(
     res=>alert("Product Added sucessfully"),
     err=>console.log(err),
     ()=>{this.router.navigate(['/']);}
   )}


}
