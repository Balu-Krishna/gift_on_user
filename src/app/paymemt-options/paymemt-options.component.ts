import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paymemt-options',
  templateUrl: './paymemt-options.component.html',
  styleUrls: ['./paymemt-options.component.css']
})
export class PaymemtOptionsComponent implements OnInit {

   
    tab: string = ''

  constructor(private notifyService : ToastrService ,private notifyService1 : ToastrService) { }

  ngOnInit(): void {
  }
 toggleWidget(tab: string){
   this.tab = tab
 }
  

  addCard(){
this.notifyService.success("Card Added successfully !!", "",);
  }
  addUpiId(){
    this.notifyService1.success("Upi Id Added successfully !!", "",);
  }
}
