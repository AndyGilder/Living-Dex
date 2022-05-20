import './HomeBox.scss';

function HomeBox({ pokemon }) {
  const formatPokemonName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div className='home-box'>
      <div>{ formatPokemonName(pokemon.name) }</div>
      <img src={pokemon.sprites.other.home.front_default} height="40" width="40" loading="lazy" alt={formatPokemonName(pokemon.name)} title={formatPokemonName(pokemon.name)}/>
    </div>
  )
}

export default HomeBox