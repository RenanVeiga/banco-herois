import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroiModule } from './heroi/heroi.module';

@Module({
  imports: [HeroiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
