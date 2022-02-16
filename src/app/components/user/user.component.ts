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

  // users;

  constructor() {
    // this.users = this.userService.getUsers();
    // this.userCount=this.userService.getUsers().length
  }

  sendRequestByUser(){
    return ++this.userCount
  }
  unSendRequestByUser(){
    return --this.userCount
  }

}
