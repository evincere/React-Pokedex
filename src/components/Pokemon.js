import React from 'react';

const Pokemon = ({pokeId, pokemon}) => (
	<li className="pokemon list-group-item">
		<span className="number">{pokeId}</span>
		<span className="icon">
			<img src={`http://www.pokestadium.com/assets/img/sprites/misc/icons/${pokemon.toLowerCase()}.png`} alt={`${pokemon}sprite`} onLoad={e => e.target.style.transform = "translateX(0)"} draggable="false" />
		</span>
		<span className="name">{pokemon}</span>
	</li>
);

export default Pokemon;