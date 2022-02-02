import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeroiModule } from './heroi/heroi.module';

@Module({
  imports: [HeroiModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
