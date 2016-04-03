import React, { Component } from 'react';
import PokemonArt from './../components/PokemonArt';
import PokemonModel from './../components/PokemonModel';
import PokemonShiny from './../components/PokemonShiny';
import PokemonEvolution from './../components/PokemonEvolution';

export default class PokemonSprites extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="pokesprites col-md-2">
				<PokemonArt />
        <PokemonModel />
        <PokemonShiny />
				<PokemonEvolution />
			</div>
		);
	}
}

PokemonSprites.propTypes = {

}