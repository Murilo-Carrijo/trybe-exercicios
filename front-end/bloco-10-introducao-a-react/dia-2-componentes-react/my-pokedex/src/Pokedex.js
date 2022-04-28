import React from 'react';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="container">
        { pokemons.map((pokemon) => (
          <div className="container-pokemon" >
            <div className="container-pokemon-info">
              <p>name: {pokemon.name}</p>
              <p>type: {pokemon.type}</p>
              <p>Weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit} </p>
              <a href={pokemon.moreInfo} target="_blank" rel="noreferrer">More information</a>
            </div>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        )) }
      </div>
    );
  }
};

export default Pokedex;