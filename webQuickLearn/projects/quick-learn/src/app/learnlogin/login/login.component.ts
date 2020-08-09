import { Component, OnInit } from '@angular/core';
import { QuickTransferService } from 'projects/quick-transfer/src/public-api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  loginbtnLoading: boolean = false;

  constructor(private quickTransfer: QuickTransferService, private fb: FormBuilder) { }

  ngOnInit() {
    this.quickTransfer.setComponentTitle('登录 - QLearn');
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      verify: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm() {
    console.log(1)
  }

}
