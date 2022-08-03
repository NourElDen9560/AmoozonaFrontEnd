import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproduct',templateUrl: './addproduct.component.html',styleUrls: ['./addproduct.component.css']})
export class AddproductComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}
 
  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl('',[Validators.required]),
    brand: new FormControl('',[Validators.required,Validators.minLength(3)]),
    quantity: new FormControl('',[Validators.required,Validators.minLength(3)]),
    details: new FormControl('',[Validators.required,Validators.minLength(3)]),
    image: new FormControl('',[Validators.required])
  });

  get name() {return this.registerForm.get('name');}
  get price() {return this.registerForm.get('price');}
  get brand() {return this.registerForm.get('brand');}
  get quantity() {return this.registerForm.get('quantity');}
  get details() {return this.registerForm.get('details');}
  get image() {return this.registerForm.get('image');}

   
  register() {

    alert("Product Added Successfully");

    // // alert(this.registerForm.value);
    // console.log("name :"+this.registerForm.value.name, 
    // "mail : "+this.registerForm.value.details,
    // "pass :"+this.registerForm.value.pass);
  }


}
