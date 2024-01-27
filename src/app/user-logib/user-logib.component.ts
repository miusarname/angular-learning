import { Component } from '@angular/core';
import { SoftwareListComponent } from '../software-list/software-list.component';

@Component({
  selector: 'app-user-logib',
  standalone: true,
  imports: [SoftwareListComponent],
  templateUrl: './user-logib.component.html',
  styleUrl: './user-logib.component.css'
})
export class UserLogibComponent {
  usarname = "miusarname";
  isLogIn = false;

  greet(){
    alert("Hola!!")
  }
}
