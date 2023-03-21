import { HttpService } from '@nestjs/axios';
import { ICharactersAPIConsumer } from "./ICharactersAPIConsumer";
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CharactersAPIConsumer implements ICharactersAPIConsumer {

	constructor(private httpService: HttpService) {
	}

	async getCharacters(params) {
		const { data } = await firstValueFrom(this.httpService.get('characters', { params }));

		return data;
	}

	async getCharacterById(id: number) {
		const { data } = await firstValueFrom(this.httpService.get(`characters/${id}`));

		return data;
	}
	async getCharacterByWithComics(id: number) {
		const { data } = await firstValueFrom(this.httpService.get(`characters/${id}/comics`));

		return data;
	}
}