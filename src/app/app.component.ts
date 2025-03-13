import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokedexComponent } from "./pokedex/pokedex.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [PokedexComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex-angular';
}
