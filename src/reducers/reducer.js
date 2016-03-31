const initialState = {
	apple: 'yum',
	words: []
}

export default function pokemons(state = initialState, action) {
	switch (action.type) {
		case 'BEBOP':
			return {
				apple: 'bebp',
				words: [
					...state.words,
					action.meh
				]
			}
	}
}