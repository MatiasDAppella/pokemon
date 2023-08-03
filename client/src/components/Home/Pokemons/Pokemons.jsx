// Styles
import style from './Pokemons.module.less';

// Hooks
import { useSelector } from 'react-redux';

// Components
import Card from './Card/Card';

const Pokemons = () => {
  const pokemons = useSelector(state => state.filtered)

  return <ul className={style.container}>{
    pokemons?.map(pokemon => <Card
      key={(pokemon.id) ? pokemon.id : pokemon.apiid}
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