import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { Heroi } from './models/heroi.interface';
import { HeroiService } from './shared/heroi.service';

@Controller('heroi')
export class HeroiController {
  constructor(private heroiService: HeroiService) {}

  @Get()
  async getAll(): Promise<Heroi[]> {
    return this.heroiService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Heroi> {
    return this.heroiService.getById(id);
  }

  @Put()
  async ModifyHero(@Body() heroi: Heroi) {
    this.heroiService.ModifyHero(heroi);
    console.log('está modificado');
  }
}
