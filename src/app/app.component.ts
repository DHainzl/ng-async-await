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

    async loadData() {
        this.error = '';
        this.pokemon = undefined;
        this.encounters = undefined;

        try {
            this.pokemon = await this.pokemonApiService.getPokemon(this.pokemonName);
            this.encounters = await this.pokemonApiService.getEncounters(this.pokemon.id);
        } catch (error) {
            this.error = `Could not fetch pokemon: ${error.status}`;
        }
    }
}
