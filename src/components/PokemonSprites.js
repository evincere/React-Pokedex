import React, { Component } from 'react';

const EvolutionChain = ({ children }) => (
	<div className="evolchain col-md-12">
	</div>
);

export default class PokemonSprites extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="pspritesWrapper col-md-3">
				<div className="officialart col-md-12">
						a
				</div>
				<div className="pokesprites col-md-12">
					a
				</div>
				<div className="shiny col-md-12">
					 	a
				</div>
				<EvolutionChain />
			</div>
		);
	}
}

PokemonSprites.propTypes = {

}