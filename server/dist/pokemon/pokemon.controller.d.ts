import { PokemonService } from './pokemon.service';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    getAll(): Promise<import("./entities/pokemon.entity").Pokemon[]>;
    getById(id: number): Promise<import("./entities/pokemon.entity").Pokemon>;
}
