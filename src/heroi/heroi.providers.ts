/* eslint-disable prettier/prettier */
import { Connection } from 'typeorm';
import { Heroi } from './models/heroi.entity';


export const heroiProviders = [
  {
    provide: 'Heroi_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Heroi),
    inject: ['DATABASE_CONNECTION'],
  },
];