import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
// property which will display 'Invalid username/password' if login fails
  errorMessage: string = "";
// this user will be 2 way property bount to the template
  user: UserModel = {
    userId: 0,
    userName: "",
    userPassword: "",
    userFirstName: "",
    userLastName: ""
  }
  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    //here we will contact UserService and validate the username and password by sedning the UserModel to the UserService
    // let's create UserService
    // now let us inject UserService to this component thrught the constructor
    let returnedUser = this.userService.validate(this.user);
    if(returnedUser.userId !=0){
      // this means that the login is successfull or the user details exists in the DB
        // so now set the isLoggedIn of AuthService to true
        // we need AuthService here, lets inject it
        this.authService.isLoggedIn = true;

      // if the user has successfully logged in, we can navigate to the home component/ list-book-http component
      // so we need Router API for this, lets inject Router through the constructor and then navigate
      this.router.navigate(["list-books-http"]);
    }else{
      // this means that the login is failed or the user details does not exist in the DB
      // lets create a error message which says 'Invalid Username/password' and display it on the template
      // we will not navigate away from this component
      this.errorMessage = 'Invalid username/password';
      // render this errorMessage on the template
    }
    
  }
}
