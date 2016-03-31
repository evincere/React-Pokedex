import React, { Component } from 'react';
import MainContent from './../components/MainContent';
import PokemonSprites from './../components/PokemonSprites';

export default class DexMain extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="dexmain col-md-8">
				<MainContent />
				<PokemonSprites />
			</div>
		);
	}
}

DexMain.propTypes = {

}