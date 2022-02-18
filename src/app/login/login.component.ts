import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserModel } from '../_models/user.model';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hasError!:boolean;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(){
    this.loginForm = this.fb.group({
      email:['jashu@gmail.com',Validators.compose([Validators.required,Validators.email])],
      password:['123456',Validators.required]
    });
  }

  get form(){
    return this.loginForm.controls;
  }

  login(){
    this.hasError = false;
    this.authService.login(this.form.email.value, this.form.password.value)
    .pipe(first())
    .subscribe((user:any) => {
      if(user){
        this.router.navigateByUrl('/').then(()=>{
          window.location.reload();
        });
      }else{
        console.log('error found');
      }
    })
  }

  controlHasError(validation:any, controlName:any): boolean {
    const control = this.loginForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName:any): boolean {
    const control = this.loginForm.controls[controlName];
    return control.dirty || control.touched;
  }
}
