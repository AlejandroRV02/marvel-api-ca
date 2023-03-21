import { Controller, Get, Query, Param, ValidationPipe } from "@nestjs/common";
import { OrderByQueryEnum } from "../../application/enums/orderByQuery.enum";
import { CharactersUseCases } from "../../application/use-cases/CharactersUseCases";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { GetCharactersQueryDto } from "../../domain/dtos/getCharactersQueryDto";

@ApiTags('Characters')
@Controller('characters')
export class CharactersController {
	constructor(private readonly charactersUseCases: CharactersUseCases) { }

	@Get()
	@ApiQuery({ name: 'name', required: false, type: String })
	@ApiQuery({ name: 'nameStartsWith', required: false, type: String })
	@ApiQuery({ name: 'orderBy', required: false, enum: OrderByQueryEnum })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'offset', required: false, type: Number })
	getCharacters(
		@Query(new ValidationPipe({
			transform: true,
			transformOptions: { enableImplicitConversion: true },
			forbidNonWhitelisted: true
		})) query: GetCharactersQueryDto
	) {
		return this.charactersUseCases.getCharacters({ ...query });
	}

	@Get(':id')
	getCharacterById(
		@Param('id') id: number,
	) {
		return this.charactersUseCases.getCharacterById(id);
	}

	@Get(':id/comics')
	getCharacterByIdWithComics(
		@Param('id') id: number,
	) {
		return this.charactersUseCases.getCharacterById(id);
	}

}