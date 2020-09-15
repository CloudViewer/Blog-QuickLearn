import { Component, OnInit } from '@angular/core';
import { QuickTransferService, Error, ErrorLevel } from 'projects/quick-transfer/src/public-api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from '../../learncomm/utils.service';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  imgVerify: string = '';
  validateForm: FormGroup;
  loginbtnLoading: boolean = false;
  imgVerify_TIO: any;
  key: any;

  constructor(private quickTran: QuickTransferService, private fb: FormBuilder, private utils: UtilsService, private message: NzMessageService) { }

  async ngOnInit() {
    this.quickTran.setComponentTitle('登录 - QLearn');
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      verify: [null, [Validators.required]],
    });
    this.getImgVerify();
  }

  /**
   * 获取验证码
   */
  getImgVerify() {
    this.quickTran.send('/verifycode', {})
      .onBeforeSend(() => {
        return { isSysLoading: false };
      })
      .onBeforeReceived(() => {
        return { isSysLoaddone: false };
      })
      .onReceived((data: any) => {
        this.key = data.key;
        this.imgVerify = data.verifyCode;
        localStorage.setItem("QL-TOKEN", data.token);
      })
      .onError((error: Error) => {
        this.message.create('error', error.detailMessage);
        return { isSysError: false };
      }, [ErrorLevel.USER])

  }

  imgVerifyClick() {
    this.getImgVerify();
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      // TODO:登录请求   this.utils.redirect('/learnadmin');
      this.quickTran.send('/login', {
        key: this.key,
        userName: this.validateForm.get('userName').value,
        password: this.validateForm.get('password').value,
        verifyCode: this.validateForm.get('verify').value
      })
        .onBeforeSend(() => {
          this.loginbtnLoading = true;
          return { isSysLoading: false };
        })
        .onBeforeReceived(() => {
          this.loginbtnLoading = false;
          return { isSysLoaddone: false };
        })
        .onReceived((res: any) => {
          if (res.success) {
            console.log(res.data)
            // clearTimeout(this.imgVerify_TIO);
            this.utils.redirect('/learnadmin');
          }
        })
        .onError((error: Error) => {
          this.message.create('error', error.detailMessage);
          // TODO:优化用户体验，当验证码过期后重新获取验证码，后端错误信息返回待调整
          // this.imgVerify_TIO = setTimeout(() => {
          //   this.imgVerifyClick();
          // }, 50);
          return { isSysError: false };
        }, [ErrorLevel.USER])
    }

  }

}
