import React, { Component } from 'react';
import PokedexTitle from './../components/PokedexTitle';
import DexSearch from './DexSearch.js';
import DexMain from './DexMain.js';
import './../styles/style.scss';

export default class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="tsearchWrapper col-md-4">
					<PokedexTitle />
					<DexSearch />
				</div>
				<DexMain />
			</div>
		);
	}
}