import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('pokemon')
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;

  @Column()
  element_type: string;

  @Column()
  hp: number;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  stamina: number;

  @Column()
  generation: number;

  @Column()
  price: number;
}
