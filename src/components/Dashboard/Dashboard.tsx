import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'store/hooks/useTypedSelector';
import { GetPokemon } from 'store/itune';

export const Dashboard: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<any>();
  const [pokemonName, setPokemonName] = useState('');
  const pokemonState = useTypedSelector((state) => state.itunes);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);

  const handleSubmit = (searchTerm: string) => {
    if (searchTerm === '') return;
    dispatch(GetPokemon(searchTerm));
    setPokemonName('');
  };

  return (
    <div className="App">
      <input type="text" value={pokemonName} onChange={handleChange} />
      <button onClick={() => handleSubmit(pokemonName)}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt="" />
          {pokemonState.pokemon.abilities.map((ability) => {
            return <p key={ability.ability.name}>{ability.ability.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};
