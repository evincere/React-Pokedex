import React from 'react';

const Species = () => (
  <div className="species col-xs-2">
    <span>Seed <br/> Pokemon</span>
  </div>
);

const Heading = () => (
  <div className="heading col-xs-7">
    <span>Bulbasaur</span>
  </div>
);

const Type = () => (
  <div className="type col-xs-3">
    <span className="types" style={{color: '#cee0e0', backgroundColor: '#669999'}}>Grass</span>
    <span className="types" style={{color: '#efd6f9', backgroundColor: '#8b42a9'}}>Poison</span>
  </div>
);

const PokemonHeader = () => (
  <div className="dexheader row">
    <Species />
    <Heading />
    <Type />
  </div>
);

export default PokemonHeader;