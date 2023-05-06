import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationLRService } from 'src/app/services/notification-lr.service';

@Component({
  selector: 'app-notification-lr',
  template: '',
})
export class NotificationLRComponent {

  constructor(
    // private notificationLRService: NotificationLRService,
    // private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    // this.notificationLRService.connect();
  
    // this.notificationLRService.notificationSource.subscribe((message: any) => {
    //   console.log(message); // or store it in a variable or use it for some other purpose

    //   this.notificationLRService.notificationSource.subscribe((message: any) => {
    //     this.toastr.success(message);
    //   });
      


    // });
  }

  
  

}
