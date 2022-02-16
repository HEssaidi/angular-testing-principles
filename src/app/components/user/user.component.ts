import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  text = 'user page';
  serverRequestCapacity=30;
  private userService: UserService = new UserService;
  userCount=this.userService.getUsers().length;


  constructor(private userrService: UserService ) {
    this.userrService.authenticate();
  }


  sendRequest(){
    if(this.userrService.checkAuthentication()){
      return "request available !!";
    }
    else {
      return "request not available !!";
    }
  }

  sendRequestByUser(){
    return ++this.userCount
  }
  unSendRequestByUser(){
    return --this.userCount
  }

}
