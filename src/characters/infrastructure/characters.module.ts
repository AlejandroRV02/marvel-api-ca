import { Module } from "@nestjs/common";
import { HttpModule } from '@nestjs/axios';
import { CharactersController } from "./controllers/characters.controller";
import { CharactersAPIConsumer } from "./http/CharactersAPIConsumer";
import { ICharactersAPIConsumer } from "./http/ICharactersAPIConsumer";
import { CharactersUseCases } from "../application/use-cases/CharactersUseCases";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config/dist/config.service";

@Module({
	imports: [
		ConfigModule,
		HttpModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				baseURL: configService.get('MARVEL_URL'),
				params: {
					ts: 1,
					apikey: configService.get<string>('MARVEL_PUBLIC_KEY'),
					hash: configService.get<string>('MARVEL_HASH')
				}
			}),
			inject: [ConfigService],
		})
	],
	controllers: [CharactersController],
	providers: [
		{
			provide: ICharactersAPIConsumer,
			useClass: CharactersAPIConsumer
		},
		CharactersUseCases,
		ConfigService
	]
})
export class CharactersModule { }