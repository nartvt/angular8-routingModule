import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { UserService } from 'src/app/_core/service/user.service';
import { DataCommonService } from 'src/app/_core/service/data-common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @ViewChild("registerForm", { static: false }) registerForm: NgForm;

  constructor(private userService: UserService, private dataService: DataCommonService) { }

  ngOnInit() {
  }
  @HostListener("window:beforeunload", ["$event"])
  canDeactivate() {
    return this.registerForm.submitted || !this.registerForm.dirty;
  }
  signUp(registerForm) {
    const objUser = {
      TaiKhoan: registerForm.userName,
      MatKhau: registerForm.password,
      Email: registerForm.email,
      SoDT: registerForm.phoneNumber,
      MaNhom: "GP09",
      MaLoaiNguoiDung: "KhachHang"
    }
    // this.userService.signUp(objUser)
    //   .subscribe((data: any) => {
    //   if (data === "User already exists") {
    //     alert(data);
    //   } else {
    //     alert("Register Success");
    //   console.log(registerForm);
    // });
    const uri = `QuanLyNguoiDung/ThemNguoiDung`;
    this.dataService.post(uri, objUser).subscribe((data: any) => {
      if (data === "User already exists") {
        alert(data);
      } else {
        alert("Register Success");
        console.log(registerForm);
      }
    });
  }
}



