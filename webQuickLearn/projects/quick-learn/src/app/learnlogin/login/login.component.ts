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
  login_TIO: any;

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

  getImgVerify() {	//验证码加载
    this.quickTran.send('/valicode', {})
      .onBeforeSend(() => {
        return { isSysLoading: false };
      })
      .onBeforeReceived(() => {
        return { isSysLoaddone: false };
      })
      .onReceived((data: any) => {
        this.imgVerify = data.vCode;
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
      // TODO:登录请求
      this.loginbtnLoading = true;
      clearTimeout(this.login_TIO);
      this.login_TIO = setTimeout(() => {
        this.utils.redirect('/learnadmin');
      }, 2000);


    }

  }

}
