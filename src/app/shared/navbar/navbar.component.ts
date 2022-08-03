import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { MyprofileComponent } from 'src/app/pages/myprofile/myprofile.component';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//, public myprofilecomponent:MyprofileComponent
  constructor(public user:UserapiService ) { }

  MyData:User={
name:'', password:'', email:'',age:0
  }
  ngOnInit(): void {
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


}
