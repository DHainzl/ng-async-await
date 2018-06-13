import { Component } from '@angular/core';
import { PokemonApiService } from './github-repos/pokemon-api.service';
import { PokemonData, PokemonEncounters } from './github-repos/pokemon-api.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    error = '';

    pokemonName = '';
    pokemon: PokemonData;
    encounters: PokemonEncounters[];

    constructor(
        private pokemonApiService: PokemonApiService,
    ) { }

    loadData() {
        this.error = '';
        this.pokemon = undefined;
        this.encounters = undefined;

        this.pokemonApiService.getPokemon(this.pokemonName)
            .then(data => {
                this.pokemon = data;
                return this.pokemonApiService.getEncounters(this.pokemon.id);
            })
            .then(encounters => {
                this.encounters = encounters;
            })
            .catch(error => {
                this.error = `Could not fetch pokemon: ${error.status}`;
            });
    }
}
