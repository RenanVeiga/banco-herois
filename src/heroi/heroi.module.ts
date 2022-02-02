import { Module } from '@nestjs/common';
import { HeroiController } from './heroi.controller';
import { HeroiService } from './shared/heroi.service';
import { DatabaseModule } from './database/database.module';
import { heroiProviders } from './heroi.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [HeroiController],
  providers: [...heroiProviders, HeroiService],
})
export class HeroiModule {}
