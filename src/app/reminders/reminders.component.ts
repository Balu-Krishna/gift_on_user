import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {
  isShown: boolean = true ; 
  constructor(private notifyService : ToastrService) { }

  ngOnInit(): void {
  }
  toggleShow() {
    this.isShown = ! this.isShown;
  }
  addReminder(){
    this.notifyService.success("Reminder Added successfully !!", "");
  }
}
