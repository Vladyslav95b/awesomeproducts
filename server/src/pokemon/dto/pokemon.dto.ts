import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PokemonDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  img: string;

  @IsString()
  @IsNotEmpty()
  element_type: string;

  @IsNumber()
  @IsNotEmpty()
  hp: number;

  @IsNumber()
  @IsNotEmpty()
  attack: number;

  @IsNumber()
  @IsNotEmpty()
  defense: number;

  @IsNumber()
  @IsNotEmpty()
  stamina: number;

  @IsNumber()
  @IsNotEmpty()
  generation: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
