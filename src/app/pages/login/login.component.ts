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

  ngOnInit(): void {
  }
  Login(){
    this.data.LoginApi(this.login.value).subscribe(
      res=>alert("sucessfully logged in"),
      err=>console.log(err),
      ()=>{
        this.router.navigate(['/']);
      }
    )
  }

}
