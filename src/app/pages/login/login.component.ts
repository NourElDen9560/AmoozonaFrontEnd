import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login = new FormGroup({email:new FormControl('', Validators.required) ,
password:new FormControl('', Validators.required) ,
})
  constructor(private data: UserapiService , private router: Router) { }
  ISLOGGED = false; 
  ngOnInit(): void {
    this.ISLOGGED=false;
  }
  
  Login(){
    // console.log("test")
    this.data.LoginApi(this.login.value).subscribe(
      res=>{
        console.log(res.data.token)
        localStorage.setItem('UserToken', `${res.data.token}`)
        // alert("sucessfully logged in")
    if(res.data.UserData.type == 'user'){
      this.data.AdminOrNot = false;
    }
    else if(res.data.UserData.type == 'admin'){
      this.data.AdminOrNot = true;
    }
    },
      err=>console.log(err),
      ()=>{
       this.data.isLogin = true;
     console.log(this.data.AdminOrNot )
     //  this.data.AdminOrNot = true;
       // window.location.reload();
        this.router.navigate(['/']);
        
      }
    )
  }

}
