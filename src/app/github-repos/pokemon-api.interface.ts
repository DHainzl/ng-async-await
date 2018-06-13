export interface PokemonData {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        [ key: string ]: string;
    };
    types: {
        slot: number;
        type: {
            url: string;
            name: string;
        };
    };
}

export type PokemonEncounters = any;
