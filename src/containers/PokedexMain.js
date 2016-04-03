import React, { Component } from 'react';
import PokemonHeader from './../components/PokemonHeader';
import PokemonInfo from './../components/PokemonInfo.';


export default class PokedexMain extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="dexmain col-md-8">
        <PokemonHeader />
        <PokemonInfo />
        <PokemonDescription />
			</div>
		);
	}
}

PokedexMain.propTypes = {

}