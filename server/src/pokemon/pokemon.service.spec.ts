import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let pokemonEntity: Repository<Pokemon>;

  const POKEMON_ENTITY_TOKEN = getRepositoryToken(Pokemon);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        {
          provide: POKEMON_ENTITY_TOKEN,
          useValue: {
            getAll: jest.fn(),
            getById: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    pokemonEntity = module.get<Repository<Pokemon>>(POKEMON_ENTITY_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('pokemon entity should be defined', async () => {
    expect(pokemonEntity).toBeDefined();
  });
});
