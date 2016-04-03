import React, { Component } from 'react';
import PokedexBrand from './../components/PokedexBrand';
import PokedexSearch from './PokedexSearch';
import PokedexMain from './PokedexMain';
import PokemonSprites from './PokemonSprites';
import './../styles/style.scss';

export default class App extends Component {
	render() {
		return (
			<div className="container-fluid">
        <PokedexSearch>
          <PokedexBrand />
        </PokedexSearch>
				<PokedexMain />
        <PokemonSprites />
			</div>
		);
	}
}