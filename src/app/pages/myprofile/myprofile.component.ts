import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserapiService } from 'src/app/services/userapi.service';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
UserData:User ={
  name:"" ,
  age: 0,
  email:"" ,
  password:"",
 
}
ArrOfCart:any[]=[]
  constructor(private user:UserapiService  , private _activated:ActivatedRoute ,private router:Router) { 
  }

  ngOnInit(): void {
    this.user.MyProfile().subscribe(
      (res)=>{
        //console.log( 'MyprofileComponent');
console.log(res);
this.ArrOfCart = res.data.MyCart
console.log(this.ArrOfCart);

this.UserData = res.data;
      },
      (err)=>{console.log(err) }
    ) 
  }
  id:any= this._activated.snapshot.paramMap.get('id'); //get id parameter
  
  RemoveProduct(id:string){
this.user.RemoveFromcART(id).subscribe(
  (res)=>{
    console.log(res);
  } ,
  (err)=>{console.log(err) } ,
  ()=>{
    this.ngOnInit() 
  }
)
  }

}
