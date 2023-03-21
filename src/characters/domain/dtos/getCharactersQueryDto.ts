import { IsString, IsEnum, IsOptional, IsPositive, Length } from "class-validator";
import { OrderByQueryEnum } from "src/characters/application/enums/orderByQuery.enum";

export class GetCharactersQueryDto {
	@IsString()
	@IsOptional()
	name?: string;

	@IsString()
	@Length(0, 1)
	@IsOptional()
	nameStartsWith?: string;

	@IsEnum(OrderByQueryEnum)
	@IsOptional()
	orderBy?: OrderByQueryEnum;

	@IsPositive()
	@IsOptional()
	limit: number;

	@IsPositive()
	@IsOptional()
	offset: number;
}