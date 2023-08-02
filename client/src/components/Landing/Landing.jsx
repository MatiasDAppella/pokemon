// Styles
import style from './Landing.module.less';

// Hooks
import { NavLink } from 'react-router-dom';

const Landing = () => {
  return <main>
    <h1 className={style.h1}>Pokémon landing page!</h1>
    <NavLink to='/home'>HOME!</NavLink>
  </main>
};

export default Landing;