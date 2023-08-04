// Styles
import style from './Home.module.less';

// Hooks
import { useState } from 'react';

// Components
import ToggleBars from './ToggleBars/ToggleBars';
import Pokemons from './Pokemons/Pokemons';

const Home = () => {

  return <main className={style.main}>
    <ToggleBars/>
    <Pokemons/>
  </main>
};

export default Home;