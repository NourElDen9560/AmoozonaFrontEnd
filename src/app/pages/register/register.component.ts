import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
Register= new FormGroup({
  name:new FormControl('', Validators.required) ,
  age:new FormControl('', Validators.required) ,
  email:new FormControl('', Validators.required) ,
  password:new FormControl('', Validators.required) ,
  image:new FormControl() ,

})
  constructor(private userdata: UserapiService ,private _router: Router) { }

  ngOnInit(): void {
  }
RegisterAction(){
  this.userdata.RegisterApi(this.Register.value).subscribe(
    (res)=>console.log(res),
    (err)=>console.log(err),
    ()=>{
            this._router.navigate(['/'])
    }
  )
}
}
