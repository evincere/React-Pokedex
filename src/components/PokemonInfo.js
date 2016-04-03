import React from 'react';

const PokemonInfoHeader = () => (
  <div className="row">
    <div className="infoheader col-md-9">
      infoheader
    </div>
    <div className="ledlights col-md-3">
      led
    </div>
  </div>
);

const BaseStats = () => (
  <div className="row">
    base stats
  </div>
);

const PokemonInfo = () => (
  <div className="row">
    <PokemonInfoHeader />
    <BaseStats />
  </div>
);

export default PokemonInfo;