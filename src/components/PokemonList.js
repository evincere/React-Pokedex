import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class PokemonList extends Component {
	constructor() {
		super();
	}

	render() {
		var obj = [{
			pokemonId: "001",
			pokemon: "Bulbasaur"
		},
		{
			pokemonId: "002",
			pokemon: "Ivysaur"
		},
		{
			pokemonId: "003",
			pokemon: "Venusaur"
		},
		{
			pokemonId: "004",
			pokemon: "Charmander"
		},
		{
			pokemonId: "005",
			pokemon: "Charmeleon"
		},
		{
			pokemonId: "006",
			pokemon: "Charizard"
		},
		{
			pokemonId: "007",
			pokemon: "Squirtle"
		},
		{
			pokemonId: "008",
			pokemon: "Wartortle"
		},
		{
			pokemonId: "009",
			pokemon: "Blastoise"
		},
		{
			pokemonId: "010",
			pokemon: "Pikachu"
		}];

		return (
			<ul className="pokemonlist list-group">
				{
					obj.map(p => {
						return <Pokemon pokeId={p.pokemonId} pokemon={p.pokemon} key={p.pokemonId}/>
					})
				}
			</ul>
		);
	}
}

PokemonList.propTypes = {
	
}