import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // authForm!: FormGroup;
  // isSubmitted = false;
  // constructor(
  //   private authService: AuthService,
  //   private router: Router,
  //   private formBuilder: FormBuilder
  // ) {}
  // ngOnInit() {
  //   this.authForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: [
  //       '',
  //       [
  //         Validators.required,
  //         Validators.minLength(6),
  //         Validators.maxLength(40),
  //       ],
  //     ],
  //   });
  // }
  // get formControls() {
  //   return this.authForm.controls;
  // }
  // signIn(){
  //   this.isSubmitted = true;
  //   if(this.authForm.invalid){
  //     return;
  //   }
  //   this.authService.signIn(this.authForm.value);
  //   this.router.navigateByUrl('/admin');
  // }
}
