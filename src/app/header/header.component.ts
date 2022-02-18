import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Router } from "@angular/router";
import * as $ from 'jquery';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserModel } from '../_models/user.model';
import { AuthService } from '../_services/auth.service';
import { CommonService } from '../_services/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  userDetails!: UserModel;

  SITE_URL = `${environment.siteUrl}`;

  @Output() public sidenavToggle = new EventEmitter();
  category$ = new BehaviorSubject<any[]>([])

  constructor(public router: Router,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private common:CommonService,
  ) {
    this.cdr.markForCheck();
  }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.userDetails = this.authService.currentUserValue;
    }
    this.getCategory();
  }

  getCategory(){
    this.common.getData('purchaser/home/category').pipe(
      map((response: any) => {
        return response.data;
    }))
    .subscribe((data:any)=>{
      this.category$.next(data);
    })
  }

  ngAfterViewInit() {
    $('.mobile_hide').on('click', function () {
      console.log('Hi');
      $('#navbarSupportedContent').toggleClass('show hide');
      // (<any>$('.navbar-collapse')).collapse('hide');
    });
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
    this.navbarOpen = !this.navbarOpen;

  }

  logout() {
    this.authService.logout();
  }
}
