import { Heroi } from './../models/heroi.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroiService {
  private mockHeroi: Heroi[] = [
    { id: 1, name: 'Dr Nice' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' },
    { id: 5, name: 'Magneta' },
    { id: 6, name: 'RubberMan' },
    { id: 7, name: 'Dynama' },
    { id: 8, name: 'Dr IQ' },
    { id: 9, name: 'Magma' },
    { id: 10, name: 'Tornado' },
  ];

  getAll() {
    return this.mockHeroi;
  }

  getById(id) {
    const heroi = this.mockHeroi.find((heroiId) => heroiId.id == id);
    return heroi;
  }

  ModifyHero(heroi: Heroi) {
    let heroiAtt = this.getAll();
    heroiAtt = heroiAtt.filter((hero) => hero.id !== heroi.id);
    heroiAtt.push(heroi);
    heroiAtt.sort((a, b) => a.id - b.id);
    this.mockHeroi = heroiAtt;
  }
}
