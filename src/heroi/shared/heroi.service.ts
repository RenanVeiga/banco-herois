import { Heroi } from '../models/heroi.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class HeroiService {
  constructor(
    @Inject('heroi_REPOSITORY')
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
