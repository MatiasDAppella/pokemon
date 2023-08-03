// Styles
import style from './Home.module.less';

// Components
import Pokemons from './Pokemons/Pokemons';

const Home = () => {

  return <main>
    <h1>Pokemon home page</h1>
    <Pokemons/>

  </main>
};

export default Home;