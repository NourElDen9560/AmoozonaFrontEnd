import { Component, OnInit } from '@angular/core';
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
  age: 12,
  email:"" ,
  password:"",
 
}
ArrOfCart:any[]=[]
  constructor(private user:UserapiService) { 
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

}
