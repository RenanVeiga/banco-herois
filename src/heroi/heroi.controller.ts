import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Heroi } from './models/heroi.entity';
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
  async modifyHero(@Body() heroi: Heroi) {
    this.heroiService.modifyHero(heroi);
  }

  @Post()
  async addHeroi(@Body() heroi: Heroi) {
    this.heroiService.addHeroi(heroi);
  }

  @Delete(':id')
  async deleteHeroi(@Param('id') id: number) {
    this.heroiService.deleteHeroi(id);
  }
}
