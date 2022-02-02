import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroiModule } from './heroi/heroi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Heroi } from './heroi/models/heroi.interface';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [Heroi],
      synchronize: true,
      autoLoadEntities: true,
    }),
    HeroiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
