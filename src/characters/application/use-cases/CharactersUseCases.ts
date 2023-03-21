import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { ICharactersAPIConsumer } from 'src/characters/infrastructure/http/ICharactersAPIConsumer';

@Injectable()
export class CharactersUseCases {
	constructor(private readonly charactersConsumer: ICharactersAPIConsumer) { }

	getCharacters(params) {
		return this.charactersConsumer.getCharacters(params);
	}

	getCharacterById(id: number) {
		return this.charactersConsumer.getCharacterById(id);
	}

	getCharacterByIdWithComics(id: number) {
		return this.charactersConsumer.getCharacterById(id);
	}
}