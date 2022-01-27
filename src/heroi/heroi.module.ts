import { Module } from '@nestjs/common';
import { HeroiController } from './heroi.controller';
import { HeroiService } from './shared/heroi.service';

@Module({
  controllers: [HeroiController],
  providers: [HeroiService],
})
export class HeroiModule {}
