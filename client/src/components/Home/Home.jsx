// Styles
import style from './Home.module.less';

// Hooks
import { useState } from 'react';

// Components
import ToggleBars from './ToggleBars/ToggleBars';
import Pokemons from './Pokemons/Pokemons';
import Navigate from './Navigate/Navigate';

const Home = () => {

  return <main className={style.main}>
    <Navigate/>
    <Pokemons/>
  </main>
};

export default Home;