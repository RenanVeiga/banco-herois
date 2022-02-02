import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroiController } from './heroi.controller';
import { Heroi } from './models/heroi.interface';
import { HeroiService } from './shared/heroi.service';

@Module({
  imports: [TypeOrmModule.forFeature([Heroi])],
  controllers: [HeroiController],
  providers: [HeroiService],
})
export class HeroiModule {}
