import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { MyprofileComponent } from 'src/app/pages/myprofile/myprofile.component';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//, public myprofilecomponent:MyprofileComponent
  constructor(public user:UserapiService  , private router:Router) { }

  LogInOrNot = false;
  MyData:User={
name:'', password:'', email:'',age:0
  }
  ngOnInit(): void {
    const token = localStorage.getItem('UserToken');
    if(token)
    this.user.isLogin = true;
   // this.LogInOrNot = true;
    
  }
    
  MyAccount(){
    this.user.MyProfile().subscribe(
      (res)=>{
console.log(res);
this.MyData = res.data;
      },
      (err)=>{console.log(err) }
    )
  }
  LogOutHandler(){
    this.user.LogOutApi().subscribe(
      (res)=>{
        console.log("LogOut Successfully");
        this.user.isLogin=false
      }
      , 
      (err)=>{console.log(err) }
      ,
      ()=>{
        
        localStorage.removeItem('UserToken')
        this.LogInOrNot=false;
 this.router.navigate(['/login']);
// window.location.reload();       
      }
    )
  }


}
