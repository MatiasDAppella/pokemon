// Styles
import style from './Pokemons.module.less';

// Hooks
import { useSelector } from 'react-redux';

// Components
import Card from './Card/Card';

const Pokemons = () => {
  const pokemons = useSelector(state => state.pokemons)

  return <ul className={style.container}>{
    pokemons?.map(pokemon => <Card
      key={(pokemon.id) ? pokemon.id : pokemon.apiid}
      apiid={pokemon.apiid}
      name={pokemon.name}
      image={pokemon.image}
      types={pokemon.types}
    />)
  }</ul>
};

export default Pokemons;