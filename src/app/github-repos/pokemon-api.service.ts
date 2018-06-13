import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonData, PokemonEncounters } from './pokemon-api.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonApiService {
    constructor(
        private http: HttpClient,
    ) { }

    getPokemon(name: string): Promise<PokemonData> {
        return this.http.get<PokemonData>(`https://www.pokeapi.co/api/v2/pokemon/${name}/`).toPromise();
    }

    getEncounters(id: number): Promise<PokemonEncounters[]> {
        return this.http.get<PokemonEncounters>(`https://www.pokeapi.co/api/v2/pokemon/${id}/encounters`).toPromise();
    }
}
