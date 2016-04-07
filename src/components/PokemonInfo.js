import React from 'react';

const InfoHeader = () => (
  <div className="infoheader row col-md-12">
    <div className="col-md-9">
      <span class="japanese">JAPANESE FUSHIGIDANE</span>
      <span class="gender">GENDER RATE 1</span>
      <span class="catch">CATCH RATE 45</span>
    </div>
    <div className="ledWrapper col-md-3 pull-right">
      <div className="led"></div>
    </div>
  </div>
);

const Info = () => (
  <div className="col-md-12">
    Info
  </div>
);

const BaseStats = () => (
  <div className="col-md-12">
    base stats
  </div>
);

const PokemonInfo = () => (
  <div className="row dexinfo center-block">
    <InfoHeader />
    <Info />
    <BaseStats />
  </div>
);

export default PokemonInfo;