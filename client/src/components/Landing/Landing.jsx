// Styles
import style from './Landing.module.less';

// Hooks
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { renderFirstPokemons } from '../../redux/actions';

const Landing = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(renderFirstPokemons())
  }, []);

  return <main>
    <h1 className={style.h1}>Pokémon landing page!</h1>
    <NavLink to='/home'>HOME!</NavLink>
  </main>
};

export default Landing;