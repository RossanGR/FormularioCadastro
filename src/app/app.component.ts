import { Component } from '@angular/core';
import { UserService } from './sevices/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-app';
  constructor(private userService: UserService) {
    this.getUser();
  }
  getUser(): void {
   this.userService.getAll().subscribe((respose) => (console.log(respose)));
  }
}
