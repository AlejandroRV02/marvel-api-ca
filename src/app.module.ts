import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { CharactersModule } from './characters/infrastructure/characters.module';
import { ComicsModule } from './comics/infrastructure/comics.module';
import { SeriesModule } from './series/infrastructure/series.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CharactersModule, ComicsModule, SeriesModule],
})
export class AppModule { }
