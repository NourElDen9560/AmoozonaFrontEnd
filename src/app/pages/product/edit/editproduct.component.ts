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
    Brand: new FormControl(''),
    quantity: new FormControl('',[Validators.required,Validators.minLength(3)]),
    details: new FormControl('',[Validators.required,Validators.minLength(3)]),
    image: new FormControl('')
  });

  get title() {return this.editForm.get('title');}
  get price() {return this.editForm.get('price');}
  get brand() {return this.editForm.get('Brand');}
  get quantity() {return this.editForm.get('quantity');}
  get details() {return this.editForm.get('details');}
  get image() {return this.editForm.get('image');}

  arr:any= {title:'',price:0,brand:'',quantity:5,details:' '};

  id:any= this._activated.snapshot.paramMap.get('id'); //get id parameter
  
    edit_product(){
      console.log(this.id);
    this.data.edit_product(this.id,this.editForm.value).subscribe(
      res=> { }, 
      err=>console.log(err),
      ()=>{ this.router.navigate([`single/${this.id}`]);  }
    )}
 
    ngOnInit(): void { 
      this.data.GetMyProduct(this.id).subscribe(
        res=>{
          this.arr = res.data;
        } ,
        (err)=>console.log(err),
        ()=>{
          this.editForm.patchValue(this.arr);
        }
      )
      
      
      }

  // ngOnInit(): void { this.listall()  }
}

 
 