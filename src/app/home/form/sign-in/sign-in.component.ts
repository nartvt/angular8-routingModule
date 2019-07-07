import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/service/user.service';
import { DataCommonService } from 'src/app/_core/service/data-common.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService,private dataService:DataCommonService) { }

  ngOnInit() {
  }
  signIn(signInForm) {
    
    // const obj = {
    //   TaiKhoan: signInForm.userName,
    //   MatKhau: signInForm.password
    // }
    // console.log(obj);
    
    // this.userService.signIn(obj)
    //   .subscribe((data: any) => {
    //     // if (data === "Sign In Success") {
    //     //   alert(data);
    //     // } else {
    //     //   alert("Sign In Fail");
    //     // }
    //     console.log(data);
    //   });
    const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${signInForm.userName}&MatKhau=${signInForm.password}`;
    this.dataService.post(uri).subscribe((data: any) => {
      if (data === "Tài khoản hoặc mật khẩu không đúng !") {
        alert(data);
        alert("success");
      } else {
        alert("Đăng Nhập Thành Công");
        localStorage.setItem("userSignIn", JSON.stringify(data));
        // console.log(data);
      }
    });
  }

}
