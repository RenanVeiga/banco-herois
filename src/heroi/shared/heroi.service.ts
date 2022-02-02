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

  modifyHero(heroi: Heroi) {
    this.heroiRepository.update(heroi.id, heroi);
  }

  addHeroi(heroi: Heroi) {
    return this.heroiRepository.create(heroi);
  }

  deleteHeroi(id: number): Promise<any> {
    return this.heroiRepository.delete(id);
  }
}
