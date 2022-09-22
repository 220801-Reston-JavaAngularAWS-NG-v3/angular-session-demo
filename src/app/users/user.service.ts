import { Injectable } from '@angular/core';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // the incomming UserModel will have only the userName and userPassword
  // the outgoing/return UserModel will have all the information of that user who has logged in if it was a successfull login
  validate(user: UserModel): UserModel{

    // here I am hard coding the user validation against admin/admin
    // ideally in your project you would be consuming an endpoint of the back end application 
        //to validate the userName and UserPassword
    if(user.userName=="admin" && user.userPassword=="admin"){
      // if we have reached here it is a successfull login
      user.userId=201;
      user.userFirstName="John";
      user.userLastName="Smith";
    }
    return user;
    
  }
}
