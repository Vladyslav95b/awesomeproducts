import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@root/auth/guards/jwt-auth.guard';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.pokemonService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.pokemonService.getById(id);
  }
}
