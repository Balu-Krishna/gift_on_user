import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { CityModel } from '../_models/city.model';
import { CountryModel } from '../_models/country.model';
import { StateModel } from '../_models/state.model';
import { UserModel } from '../_models/user.model';
import { AuthService } from '../_services/auth.service';
import { CommonService } from '../_services/common.service';
import { ConfirmPassword } from '../_share/confirmpassword.validator';
const Empty_User: UserModel = {
  _id : undefined,
  fullName : "",
  email : "",
  password : "",
  confirmpassword : "",
  age : "",
  city : "",
  state : "",
  country : "",
  phone : "",
  address : "",
  profileImage:"",
};

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  signupForm!:FormGroup;
  user!:UserModel;
  hasError!:boolean;
  city$ = new BehaviorSubject<CityModel[]>([])
  state$ = new BehaviorSubject<StateModel[]>([])
  country$ = new BehaviorSubject<CountryModel[]>([])

  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private commonService:CommonService,
    private router: Router
  ) { 
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  
  loadForm(){
    this.signupForm = this.fb.group({
      fullName:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      age:['',Validators.compose([Validators.required, Validators.pattern(/^[0-9]\d*$/)])],
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
      phone:['',Validators.compose([Validators.required, Validators.pattern(/^[0-9]\d*$/)])],
      address:['',Validators.compose([Validators.minLength(5),Validators.required])],
      agree:['', Validators.requiredTrue]
    },{
      validator:ConfirmPassword('password','confirmpassword')
    });
  }

  ngOnInit(): void {
    this.user = Empty_User;
    this.loadForm();
    this.loadCities();
    this.loadCountries();
    this.loadStates();
  }

  loadCities(){
    this.commonService.getData('vendor/auth/city').pipe(
      map((response: any) => {
        return response.data;
    }))
    .subscribe((data:any)=>{
      this.city$.next(data);
    })
  }

  loadStates(){
    this.commonService.getData('vendor/auth/state').pipe(
      map((response: any) => {
        return response.data;
    }))
    .subscribe((data:any)=>{
      this.state$.next(data);
    })
  }

  loadCountries(){
    this.commonService.getData('vendor/auth/countries').pipe(
      map((response: any) => {
        return response.data;
    }))
    .subscribe((data:any)=>{
      this.country$.next(data);
    })
  }

  signup(){
    this.hasError = false;
    this.prepareData();
    this.authService.signup(this.user).pipe(first()).subscribe((user:UserModel)=>{
      if(user){
        this.router.navigateByUrl('/').then(()=>{
          window.location.reload();
        });
      }else{
        this.hasError = true;
      }
    })
  }
  
  prepareData(){
    const _formdata = this.signupForm.value;
    this.user = new UserModel();
    this.user.fullName = _formdata.fullName;
    this.user.email = _formdata.email;
    this.user.password = _formdata.password;
    this.user.confirmpassword = _formdata.confirmpassword;
    this.user.age = _formdata.age;
    this.user.city = _formdata.city;
    this.user.state = _formdata.state;
    this.user.country = _formdata.country;
    this.user.phone = _formdata.phone;
    this.user.address = _formdata.address;
  }
  
  get form(){
    return this.signupForm.controls;
  }
  
  controlHasError(validation:any, controlName:any): boolean {
    const control = this.signupForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName:any): boolean {
    const control = this.signupForm.controls[controlName];
    return control.dirty || control.touched;
  }

}
