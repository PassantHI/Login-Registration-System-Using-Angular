import { Component } from '@angular/core';
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RegistrationComponent,LoginComponent,RegistrationComponent,RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
