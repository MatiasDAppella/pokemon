// Styles
import style from './Home.module.less';

// Hooks
import { useSelector } from 'react-redux';

// Components
import Card from './Card/Card';

const Home = () => {
  const pokemons = useSelector(state => state.pokemons)
  let key = 1

  return <main>
    <h1>Pokemon home page</h1>
    <ul className={style.container}>{
      pokemons?.map(pokemon => <Card
        key={++key}
        apiid={pokemon.apiid}
        name={pokemon.name}
        image={pokemon.image}
        types={pokemon.types}
      />)
    }</ul>

  </main>
};

export default Home;