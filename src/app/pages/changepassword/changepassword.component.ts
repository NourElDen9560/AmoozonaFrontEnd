import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
NewPasswordObj= new FormGroup({
  oldpassword:new FormControl('' , Validators.required) , 
  password:new FormControl('' , Validators.required)
})
  constructor(private user:UserapiService , private router:Router) { }

  ngOnInit(): void {
  }
  OnSubmit(){
this.user.ChangeMyPasword(this.NewPasswordObj.value).subscribe(
  (res)=>{
    console.log("Changed successfully")
  }
  , 
  (err)=>{console.log(err) } ,
  ()=>{
   
  }
)
  }

}
