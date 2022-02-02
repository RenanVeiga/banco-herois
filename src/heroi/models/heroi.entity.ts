import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Heroi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;
}
