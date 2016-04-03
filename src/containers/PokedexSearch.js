import React, { Component } from 'react';
import SearchBar from './../components/SearchBar';
import PokemonList from './../components/PokemonList';

export default class DexSearch extends Component {
	constructor() {
		super();
	}

	render() {
    const { children } = this.props;
		return (
      <div className="col-md-3">
        {children}
        <div className="row">
          <div className="dexsearch col-md-12">
            <SearchBar />
            <PokemonList />
          </div>
        </div>
      </div>
		);
	}
}

DexSearch.propTypes = {
	
}