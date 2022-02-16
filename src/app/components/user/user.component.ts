import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  text = 'user page';
  isRequestAvailable: string ="";
  serverRequestCapacity=30;
  private userService: UserService = new UserService;
  userCount=this.userService.getUsers().length;


  constructor(private userrService: UserService ) {
    this.userrService.authenticate();
  }


  sendRequest(){
    if(this.userrService.checkAuthentication()){
      this.isRequestAvailable = "request available !!";
    }
    else {
      this.isRequestAvailable = "request not available !!";
    }
  }

  sendRequestByUser(){
    return ++this.userCount
  }
  unSendRequestByUser(){
    return --this.userCount
  }

}
