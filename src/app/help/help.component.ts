import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  isShown: boolean = true ; 
  constructor(private notifyService : ToastrService) { }

  panelOpenState = false;
  ngOnInit(): void {
  }
  toggleShow() {
    this.isShown = ! this.isShown;
  }
}
