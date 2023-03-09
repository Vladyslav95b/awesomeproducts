import {
  Entity,
  Column,
  Index,
  BeforeInsert,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum RoleEnumType {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Index('email_index')
  @Column({
    unique: true,
  })
  email: string;

  @Column({ select: true })
  password: string;

  @Column({
    type: 'enum',
    enum: RoleEnumType,
    default: RoleEnumType.USER,
  })
  role: RoleEnumType.USER;

  @Column({
    default: 'image.png',
  })
  photo: string;

  @Column({
    default: false,
  })
  verified: boolean;

  // TODO change this is we dont woona return password
  toJSON() {
    // return { ...this, password: undefined, verified: undefined };
    return { ...this };
  }

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLocaleLowerCase();
  }
}
