import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private data:ProductService , private  _activated:ActivatedRoute , private router:Router) { }

  editForm = new FormGroup({
    title: new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl('',[Validators.required]),
    brand: new FormControl('',[Validators.required,Validators.minLength(3)]),
    quantity: new FormControl('',[Validators.required,Validators.minLength(3)]),
    details: new FormControl('',[Validators.required,Validators.minLength(3)]),
    image: new FormControl('',[Validators.required])
  });

  get title() {return this.editForm.get('title');}
  get price() {return this.editForm.get('price');}
  get brand() {return this.editForm.get('brand');}
  get quantity() {return this.editForm.get('quantity');}
  get details() {return this.editForm.get('details');}
  get image() {return this.editForm.get('image');}

  arr:any= {title:'pc desktop',price:1000,brand:'hp',quantity:5,details:'more data ',image:'image'};

  id:any= this._activated.snapshot.paramMap.get('id'); //get id parameter
  
    edit_product(editForm:FormGroup){
    this.data.edit_product(this.id,this.editForm.value).subscribe(
      res=> { alert(res.message);}, 
      err=>console.log(err),
      ()=>{ this.router.navigate([`single/${this.id}`]);  }
    )}
 
    ngOnInit(): void {   this.editForm.patchValue(this.arr);  }

  // ngOnInit(): void { this.listall()  }
}

 
 