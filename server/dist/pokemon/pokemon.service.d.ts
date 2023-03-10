import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';
export declare class PokemonService {
    private pokemonEntity;
    private logger;
    constructor(pokemonEntity: Repository<Pokemon>);
    getAll(): Promise<Pokemon[]>;
    getById(id: number): Promise<Pokemon>;
}
