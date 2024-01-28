import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-software-list',
  standalone: true,
  imports: [],
  template: `
    @if (username && logged()) {
    <h1 class="GreetingUser">Esta es un lista generada por:{{ username }}</h1>
    }
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.nombre)">{{ game.nombre }}</li>
      }
    </ul>
  `,
  styleUrl: './software-list.component.css',
})
export class SoftwareListComponent {

  @Input() username = '';

  @Input() isLogIn= '';

  @Output() addFavoriteEvent = new EventEmitter<string>();

  games = [
    { id: 1, nombre: 'The Witcher 3: Wild Hunt' },
    { id: 2, nombre: 'The Legend of Zelda: Breath of the Wild' },
    { id: 3, nombre: 'Red Dead Redemption 2' },
    { id: 4, nombre: 'Grand Theft Auto V' },
    { id: 5, nombre: 'Dark Souls III' },
    { id: 6, nombre: 'Persona 5' },
    { id: 7, nombre: 'God of War (2018)' },
    { id: 8, nombre: 'Super Mario Odyssey' },
    { id: 9, nombre: 'Bloodborne' },
    { id: 10, nombre: 'The Last of Us Part II' },
    { id: 11, nombre: "Uncharted 4: A Thief's End" },
    { id: 12, nombre: 'Horizon Zero Dawn' },
    { id: 13, nombre: 'Final Fantasy VII Remake' },
    { id: 14, nombre: 'Minecraft' },
    { id: 15, nombre: 'Fortnite' },
    { id: 16, nombre: 'Overwatch' },
    { id: 17, nombre: 'Among Us' },
    { id: 18, nombre: 'League of Legends' },
    { id: 19, nombre: 'Call of Duty: Warzone' },
    { id: 20, nombre: 'Valorant' },
  ];

  logged = ()=>{
    if (this.isLogIn == "true") {
      return true;
    }else{
      return false;
    }
  }

  fav(gameName:string){
    // alert(`A ${this.logged()? this.username :  'usuario'}, le gusta ${gameName}`)
    this.addFavoriteEvent.emit(gameName);
  }
}
