import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserLogibComponent } from './user-logib/user-logib.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserLogibComponent],
  templateUrl: './app.component.html',
  // template:`
  // <h1>Hola mundo,desde {{city}}</h1>
  // <app-user-logib/>
  // `,
  styles:`
  h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  `
})
export class AppComponent {
  city="Bucaramanga";
}
