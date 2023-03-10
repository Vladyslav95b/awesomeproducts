import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  private logger = new Logger('UserService');
  constructor(
    @InjectRepository(Pokemon)
    private pokemonEntity: Repository<Pokemon>,
  ) {}

  async getAll() {
    return this.pokemonEntity.find();
  }

  async getById(id: number) {
    const pokemon = this.pokemonEntity.findOne({ where: { id } });
    if (!pokemon) {
      throw new HttpException('Pokemon doesnt exist', HttpStatus.NOT_FOUND);
    }

    return pokemon;
  }
}
