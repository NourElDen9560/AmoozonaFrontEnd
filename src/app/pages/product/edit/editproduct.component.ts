import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserapiService } from 'src/app/services/userapi.service';

// export class ItemDetailComponent implements OnInit {
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   @Input() item = ''; // decorate the property with @Input()
// }

@Component({selector: 'app-editproduct', templateUrl: './editproduct.component.html', styleUrls: ['./editproduct.component.css'] })

export class EditproductComponent implements OnInit {

  // @Input() item = ''; // decorate the property with @Input()
  // currentItem = 'Television';

  constructor(public _user :UserapiService,public http:HttpClient , private data:ProductService , private  _activated:ActivatedRoute , private router:Router) { }

  editForm = new FormGroup({
    title: new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl('',[Validators.required]),
    brand: new FormControl('',[Validators.required,Validators.minLength(3)]),
    quantity: new FormControl('',[Validators.required,Validators.minLength(3)]),
    details: new FormControl('',[Validators.required,Validators.minLength(3)]),
    img: new FormControl('')
  });

  get title() {return this.editForm.get('title');}
  get price() {return this.editForm.get('price');}
  get brand() {return this.editForm.get('brand');}
  get quantity() {return this.editForm.get('quantity');}
  get details() {return this.editForm.get('details');}
  get img() {return this.editForm.get('img');}

  arr:any= {title:'pc desktop',price:1000,brand:'hp',quantity:5,details:'more data ',img:'static_place'};

  id:any= this._activated.snapshot.paramMap.get('id'); //get id parameter

  myNewImg:any

    edit_product(editForm:FormGroup){

       this.upImg()
    this.data.edit_product(this.id,this.editForm.value).subscribe(
      res=> { console.log(res);  alert(res.message); }, 
      err=>console.log(err),
      ()=>{ this.router.navigate([`single/${this.id}`]);  }
    )}
 
    ngOnInit(): void {  this.editForm.patchValue(this.arr);  } 
    
    
fileChng(event:any){
  this.myNewImg = event.target.files[0]
  console.log("image :" + this.myNewImg)
  console.log("image :" + this.myNewImg.name)
  console.log("this.editForm :" + this.editForm.value)

}

upImg(){
  // const myData = new FormData()

  // myData.append("img", this.myNewImg, this.myNewImg.name)


  // this.data.change_img(myData,this.id).subscribe(
  //   res=>{ console.log("this : "+res)},
  //   err=>{console.log(err) ; console.log("err" + err.message)},
  //   ()=>{ this.router.navigate([`single/${this.id}`]);  

  // })

  const uploadData = new FormData();
  uploadData.append('myFile', this.myNewImg, this.myNewImg.name);
  this.http.post(`http://localhost:3000/api/product/changeImage/${this.id}`,uploadData)
    .subscribe(event => { console.log(event); });

  // this.http.post('http://localhost:3000/api/product/changeImage', this.myNewImg)
  // .subscribe(...);

}
}
