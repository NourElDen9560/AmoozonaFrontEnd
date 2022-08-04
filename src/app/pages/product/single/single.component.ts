import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  products: any[] = [];
  constructor(private userdata: UserapiService, private data: ProductService, private _activated: ActivatedRoute, private router: Router) { }

  id: any = this._activated.snapshot.paramMap.get('id'); //get id parameter
  obj: any = {};
  checkOtpValueFlag = false;
  comment: any ="";

  CheckOtp = new FormGroup({ otp: new FormControl('', [Validators.required]), })

  delete_product(id: any) {
    this.data.delete_product(id).subscribe(
      res => { console.log(res); alert('product deleted successfully'); },
      err => console.log(err),
      () => { this.router.navigate(['/']); }
    )
  }

  add_comment(id: any , newcomment: any) {
    this.comment = {"comment":newcomment.value};
    // console.log("comment must be here "+ this.comment )
    this.data.add_comment(id,this.comment).subscribe(
      res => {  console.log(res);   },
      err => { alert(err.error.message); console.log(err);},
      () => { this.router.navigate([`/single/${id}`]); }
    )
  }

  list_single_product() {
    this.data.list_single_product(this.id).subscribe(
      res => {
        this.obj = res.data;
        console.log("test" + this.products)
      },
      err => console.log(err),
      () => { }
    )
  }

  ngOnInit(): void { this.list_single_product() }

  CheckValidationOTP() {
    this.userdata.MyProfile().subscribe(
      res => {
         console.log(res.data.otp)
        if (res.data.otp == this.CheckOtp.value.otp) {
          this.checkOtpValueFlag = true;
          console.log(typeof this.id)
          this.userdata.AddToMyCart(this.id).subscribe(
            res => {
              this.router.navigate(['/myaccount'])
            })}},
      (err) => console.log(err),
      () => { console.log(this.checkOtpValueFlag) }
    )

}}
