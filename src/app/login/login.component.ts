import {Component, OnInit} from '@angular/core';
import {AuthenticateUserService} from '../services/authenticate-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  projectLogo = './assets/image/angularjs.png';
  constructor(private authenticateUser: AuthenticateUserService, private router: Router) {
  }

  ngOnInit() {
  }

  submitForm() {
    //const isValidated = this.validateUserFields(this.username, this.password);

    this.authenticateUser.getAuthenticatesUser().subscribe((user) => {
      console.log(user);
      this.router.navigateByUrl('/dashboard');
    });
  }

  registerUser() {

  }

  validateUserFields(username: String, password: String) {
    if (username.length < 6) {
        return 'Invalid Username';
    } else if (!username.match('/^[A-Z]+$/i')) {
        return false;
    } else if (password.length < 6) {
        return false;
    }
  }

}
