// Styles
import style from './Home.module.less';

// Hooks
import { useState } from 'react';

// Components
import Pokemons from './Pokemons/Pokemons';
import Filters from './Filters/Filters';
import SearchBar from './SearchBar/SearchBar';

const Home = () => {
  const [renderedBar, setRenderedBar] = useState("filters")

  return <main>
    <h1>Pokemon home page</h1>
    {(renderedBar === "filters")
      ? <Filters/>
      : <SearchBar/>
    }
    <Pokemons/>

  </main>
};

export default Home;