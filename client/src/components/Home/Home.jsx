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

  return <main className={style.main}>
    <div className={style.toggleBar}>
      <h1>Pokemon home page</h1>
      <button>BUTTON</button>
    </div>
    {(renderedBar === "filters")
      ? <Filters/>
      : <SearchBar/>
    }
    <Pokemons/>

  </main>
};

export default Home;