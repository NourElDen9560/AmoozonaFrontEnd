import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  editForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl('',[Validators.required]),
    brand: new FormControl('',[Validators.required,Validators.minLength(3)]),
    quantity: new FormControl('',[Validators.required,Validators.minLength(3)]),
    details: new FormControl('',[Validators.required,Validators.minLength(3)]),
    image: new FormControl('',[Validators.required])
  });

  
  get name() {return this.editForm.get('name');}
  get price() {return this.editForm.get('price');}
  get brand() {return this.editForm.get('brand');}
  get quantity() {return this.editForm.get('quantity');}
  get details() {return this.editForm.get('details');}
  get image() {return this.editForm.get('image');}
  
  arr:any= {name:'pc desktop',price:1000,brand:'hp',quantity:5,details:'more data ',image:'image'};


  constructor() { }

  ngOnInit(): void {

    this.editForm.patchValue(this.arr);

  }
  // setter for form controls
  // setFormControls() {
  //   this.editForm.patchValue(this.arr);
  // }
  
  register() {

    alert("Product Added Successfully");

    // // alert(this.registerForm.value);
    // console.log("name :"+this.registerForm.value.name, 
    // "mail : "+this.registerForm.value.details,
    // "pass :"+this.registerForm.value.pass);
  }


}
