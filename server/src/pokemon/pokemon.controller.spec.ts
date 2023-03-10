import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

describe('PokemonController', () => {
  let controller: PokemonController;
  let service: PokemonService;
  let pokemonEntity: Repository<Pokemon>;

  const POKEMON_ENTITY_TOKEN = getRepositoryToken(Pokemon);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        PokemonService,
        {
          provide: POKEMON_ENTITY_TOKEN,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = module.get<PokemonService>(PokemonService);
    pokemonEntity = module.get<Repository<Pokemon>>(POKEMON_ENTITY_TOKEN);
  });

  it('should be definedd', () => {
    expect(controller).toBeDefined();
  });

  describe('get pokemons', () => {
    const resultArray = [
      {
        id: 1,
        name: 'Pokem',
        element_type: 'earth',
        hp: 100,
        stamina: 100,
        defense: 100,
        attack: 100,
        generation: 1,
        price: 250,
      },
    ] as Pokemon[];

    const result = {
      id: 1,
      name: 'Pokem',
      element_type: 'earth',
      hp: 100,
      stamina: 100,
      defense: 100,
      attack: 100,
      generation: 1,
      price: 250,
    } as Pokemon;
    it('find all', async () => {
      jest
        .spyOn(service, 'getAll')
        .mockImplementation(async () => await resultArray);

      expect(await controller.getAll()).toBe(resultArray);
    });
    it('find one', async () => {
      jest
        .spyOn(service, 'getById')
        .mockImplementation(async () => await result);

      expect(await controller.getById(1)).toBe(result);
    });
  });
});
