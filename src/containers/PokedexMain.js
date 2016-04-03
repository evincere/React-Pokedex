import React, { Component } from 'react';
import PokemonHeader from './../components/PokemonHeader';
import PokemonInfo from './../components/PokemonInfo';
import PokemonDescription from './../components/PokemonDescription';

export default class PokedexMain extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="dexmainWrapper col-md-6">
        <div className="dexmain col-md-12">
          <PokemonHeader />
          <PokemonInfo />
          <PokemonDescription />
        </div>
			</div>
		);
	}
}

PokedexMain.propTypes = {

}