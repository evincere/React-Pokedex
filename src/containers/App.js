import React, { Component } from 'react';
import PokedexBrand from './../components/PokedexBrand';
import PokedexSearch from './PokedexSearch';
import PokedexMain from './PokedexMain';
import './../styles/style.scss';

export default class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="tsearchWrapper col-md-4">
					<PokedexBrand />
					<PokedexSearch />
				</div>
				<PokedexMain />
			</div>
		);
	}
}