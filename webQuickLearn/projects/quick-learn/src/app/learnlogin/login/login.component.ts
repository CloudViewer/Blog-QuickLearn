import { Component, OnInit } from '@angular/core';
import { QuickTransferService } from 'projects/quick-transfer/src/public-api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from '../../learncomm/utils.service';


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

  constructor(private quickTransfer: QuickTransferService, private fb: FormBuilder, private utils: UtilsService, ) { }

  async ngOnInit() {
    this.quickTransfer.setComponentTitle('登录 - QLearn');
    // TODO: 初始化时返回验证码图片
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      verify: [null, [Validators.required]],
    });
    this.imgVerify = 'data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAeCAIAAABoq03CAAADQ0lEQVR42u3aX4hMURwH8CG2zeR/ilryQC3hQVEoL2iN9mFrRWk2Suthsm2RWrtPiPVCpNTSRmqJqJ1ECrWN1D6ozRNio13E2EzaqKlt169+/PZ07rnn/s65f+bONKfvw517z5lmPvObc8+ZJjHl1Y4c6vfMVLV5tYSfwfsPZikVYHFm7Avk3Y+LlLhAx7ClPvfxQ6PeLL6JIe6xRJoyuqJGShXabxPFqYno1vrT0McWforyLQ2+OOxn+MifAqSEH4mIblzRYB0Zt09oftuaLcThu6KYOkyt7w4vY0YcdaPzqlH0r2Fgfq0YOt/7rAtDZ4ZOdUD0z4Z9mN3o4awdxXDn6NJCS8ROayxqEtcIfnzUgDGCzj3vxAD0iQ0toUP7fJKO692kzx+lZFWe1FSi8ipxIz3nSUicUiHQTtB159MY6VLz0jViONASJRW70RQkopc9tMVVNJL0Id1XuiBKaNOvhffU0bj6OyZiaHHiDgSaeRMbyRQx4iUUb86n/n0k+VTw0Jq269VPZ0oFba2sZxLPi9UN1mJMlY3n6Ntrb0EkfYSW9KWWPbsdEh6023rDDzS/W1hbcOQmcX5FI7dG3AKas7xjSilXdZqeUf/WYbqC1hS4KbTSlGPNMU2mj0PcusUa+sm8O5AApw43TbuixjMHMkedJxEdYlfOOuiJfUlNLFYdk5uHME7uXy+zGISmh2JMKZlFraxTsKZI9eus8abJp5DoKhoOVm3b6xkapazuAFcddtDWPT25Q9mwXG5ppYSxvFtyfxgd4YAJvbJtlKKcapnQUre57b2QSOfouK2jNR1IHNXoQA+t2S4it17cFTrXvlNMsNAzz7WEvTM0uh+SuFjynj+AOJuGm1vRPfkHUnxWtNKaD50Z3+S56mjsXw/Hs5PfMNZ8Rj1jN3VooOsf1npGBAV0MeLKD6yRWxQX0WlaEPl217x2mz3clO8tf4ypnDk6t3GPGLedIYhP/1L235q5c3FC8/cpJC6hl+vN0G2XCDk50APRD+n7WsTwt3kWG0JRvPp3g9DbjEWtQUJfe7sgJm+sac6HGForoAvvL/FTWuvxwXpM/OvaV0VvaZiAKC9dOP0bEuALratrw5Sp+F8kvZhcJanCBwAAAABJRU5ErkJggg==';
  }

  async getImgVerify() {	//验证码加载
    // TODO: 请求后端返回结果

  }

  async imgVerifyClick() {
    // this.imgVerify = await this.getImgVerify();
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      /**
       * TODO: 请求后端返回结果
       */
      console.log('submitForm()');
      this.loginbtnLoading = true;
      clearTimeout(this.login_TIO);
      this.login_TIO = setTimeout(() => {
        this.utils.redirect('/learnadmin');
      }, 2000);


    }

  }

}
