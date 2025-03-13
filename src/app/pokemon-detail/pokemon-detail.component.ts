import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon_url:string = '';
  pokemon:any = '';

  pokemon_pos:string = '';

  pokemon_shiny:boolean = false;
  pokemon_front:boolean = true;

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.http.get(this.pokemon_url).subscribe((res)=>{
      this.pokemon = res;
      this.pokemon_pos = this.pokemon.sprites.front_default;
    });
  }

  changeShiny(){
    this.pokemon_shiny = !this.pokemon_shiny;
    if(this.pokemon_shiny){
      this.pokemon_pos = this.pokemon_front ? this.pokemon.sprites.front_shiny : this.pokemon.sprites.back_shiny;
    }else{
      this.pokemon_pos = this.pokemon_front ? this.pokemon.sprites.front_default : this.pokemon.sprites.back_default;
    }
  }

  changePos(){
    this.pokemon_front = !this.pokemon_front;
    if(this.pokemon_front){
      this.pokemon_pos = this.pokemon_shiny ? this.pokemon.sprites.front_shiny : this.pokemon.sprites.front_default;
    }else{
      this.pokemon_pos = this.pokemon_shiny ? this.pokemon.sprites.back_shiny : this.pokemon.sprites.back_default;
    }
  }
}
