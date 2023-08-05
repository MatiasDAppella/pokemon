// Styles
import style from './Pokemons.module.less';

// Hooks
import { useSelector } from 'react-redux';

// Components
import Card from './Card/Card';

const Pokemons = () => {
  const display = useSelector(state => state.displayPokemons)

  return <ul className={style.container}>{
    display?.map(pokemon => <Card
      key={(pokemon.id) ? pokemon.id : pokemon.apiid}
      id={pokemon.id}
      apiid={pokemon.apiid}
      name={pokemon.name}
      image={pokemon.image}
      types={pokemon.types}
      stroke={pokemon.stroke}
      defense={pokemon.defense}
      health={pokemon.health}
      speed={pokemon.speed}
    />)
  }</ul>
};

export default Pokemons;