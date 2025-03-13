import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PokemonDetailComponent } from "../pokemon-detail/pokemon-detail.component";

@Component({
  selector: 'app-pokedex',
  imports: [PokemonDetailComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  pokemon_list:any = '';

  constructor(private http: HttpClient){
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').subscribe((res)=>{
      this.pokemon_list = res;
    })
  }
}
