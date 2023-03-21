export abstract class ICharactersAPIConsumer {
	abstract getCharacters(params)
	abstract getCharacterById(id: number)
	abstract getCharacterByWithComics(id: number)
}

