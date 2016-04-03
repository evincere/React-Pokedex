import React, { Component } from 'react';
import SearchBar from './../components/SearchBar';
import PokemonList from './../components/PokemonList';

export default class DexSearch extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="dexsearch col-md-12">
				<SearchBar />
				<PokemonList />
			</div>
		);
	}
}

DexSearch.propTypes = {
	
}