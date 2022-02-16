import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() { }

  getUsers(): Array<{}> {
      return [
          {
              name: 'user1',
              surname: 'usersurname1'
          },
          {
              name: 'user2',
              surname: 'usersurname2'
          }
      ];
  }


  authenticate(){
    localStorage.setItem('name', 'user1')
  }
  checkAuthentication(){
    return (localStorage.getItem('name') === 'user1')
  }
}
