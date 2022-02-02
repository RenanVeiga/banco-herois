import { Heroi } from '../models/heroi.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HeroiService {
  constructor(
    @InjectRepository(Heroi)
    private heroiRepository: Repository<Heroi>,
  ) {}

  getAll(): Promise<Heroi[]> {
    return this.heroiRepository.find();
  }

  getById(id): Promise<Heroi> {
    return this.heroiRepository.findOne(id);
  }

  ModifyHero(heroi: Heroi) {
    this.heroiRepository.update(heroi.id, heroi);
  }

  AddHeroi(heroi: Heroi) {
    return this.heroiRepository.create(heroi);
  }

  DeleteHeroi(id: number): Promise<any> {
    return this.heroiRepository.delete(id);
  }
}
