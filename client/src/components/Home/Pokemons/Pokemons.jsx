// Styles
import style from './Pokemons.module.less';

// Hooks
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// types
import { TOGGLE_ALL, TOGGLE_CATCHED } from '../../../redux/types';

// Components
import Card from './Card/Card';
import CreateCard from './CreateCard/CreateCard';
import Loading from '../../Loading/Loading';
import Empty from '../../Empty/Empty';

const Pokemons = () => {
  const [loaded, setLoaded] = useState(false)
  const filter = useSelector(state => state.displayConfig.filter)
  const display = useSelector(state => state.displayPokemons)

  // paginated
  const pokemonsPerPage = 12
  const [pages, setPages] = useState({ actual: 1, last: 1 })

  useEffect(() => {
    if (display.length > 0) setLoaded(true)
    setPages({ ...pages, actual: 1, last: Math.ceil(display.length/pokemonsPerPage) })
  }, [display])

  const loadHandler = (event) => {
    switch (event.target.id){
      case 'NEXT':
        if (pages.actual < pages.last) setPages({ ...pages, actual: pages.actual + 1 })
        return;
      case 'PREV':
        if (pages.actual > 1) setPages({ ...pages, actual: pages.actual - 1 })
        return;
    }
  };

  return <>
    <ul className={style.container}>
      {(filter === TOGGLE_ALL || filter === TOGGLE_CATCHED) && <CreateCard/>}
      {(!loaded) && <Loading/>}
      {(loaded) && (display.length === 0) && <Empty/>}

      {/** Display */}
      {
        display?.slice((pages.actual - 1) * pokemonsPerPage, pages.actual * pokemonsPerPage).map(pokemon => <Card
          key={(pokemon.id) ? pokemon.id : pokemon.apiid}
          id={pokemon.id}
          apiid={pokemon.apiid}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
          stroke={pokemon.stroke}
          defense={pokemon.defense}
          health={pokemon.health}
          speed={pokemon.speed}
          />)
        }
    </ul>
    
    {/** Paginated */}
    <div className={style.paginatedBox}>
      <button id='PREV' className={(pages.actual === 1) ? style.muted : style.prev} onClick={loadHandler}>{"← Prev"}</button>
      <div className={(display.length <= 12) && style.muted}>
        <span>actual page</span>
        <strong>{pages.actual}</strong>
      </div>
      <button id='NEXT' className={(pages.actual === pages.last || display.length <= 12) ? style.muted : style.next} onClick={loadHandler}>{"Next →"}</button>
    </div>
  </>
};

export default Pokemons;