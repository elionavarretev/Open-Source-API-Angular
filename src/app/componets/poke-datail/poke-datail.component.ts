import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-datail',
  templateUrl: './poke-datail.component.html',
  styleUrls: ['./poke-datail.component.scss']
})
export class PokeDatailComponent implements OnInit {

  pokemon: any = '';
  pokemonAbilities = [];
  pokemonImage ='';

 ngOnInit(): void {
  }

 constructor(private PokemonService: PokemonService, private activatedRouter: ActivatedRoute) {  
  this.activatedRouter.params.subscribe(
    params => {
      this.getPokemon(params['id']);
    }
  );   
 }

  getPokemon(id){
    this.PokemonService.getPokemons(id).subscribe(
      res =>
      {
        console.log(res);
        this.pokemon = res;
        this.pokemonImage = this.pokemon.sprites.front_shiny;
        this.pokemonAbilities = res.abilities[0].ability.name;

      },
      err =>{
        console.log(err);
      }
    );
  }

}
