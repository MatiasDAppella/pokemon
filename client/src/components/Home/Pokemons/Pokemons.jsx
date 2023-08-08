// Styles
import style from './Pokemons.module.less';

// Hooks
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Components & functions
import Card from './Card/Card';

const Pokemons = () => {
  const display = useSelector(state => state.displayPokemons)
  const [ button, setButton ] = useState(true)
  
  // infinite scroll
  const { ref: reference, inView: visible } = useInView()

  useEffect(() => {
    if (visible && !button) loadHandler()
  }, [visible])

  // paginated
  const pokemonsPerPage = 12
  const [pages, setPages] = useState({ actual: 1, last: 1 })

  useEffect(() => {
    setPages({ ...pages, actual: 1, last: Math.ceil(display.length/pokemonsPerPage) })
    if (display.length > 12) setButton(true)
    else setButton(false)
  }, [display])

  const loadHandler = () => {
    if (pages.actual < pages.last) setPages({ ...pages, actual: pages.actual + 1 })
    if (button) setButton(false)
  };

  return <><ul className={style.container}>{
      display?.slice(0, pages.actual * pokemonsPerPage).map(pokemon => <Card
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
    }</ul>
    
    {(button) && <button className={style.moreButton} onClick={loadHandler}>More</button>}

    <div id='end' ref={reference}></div>
  </>
};

export default Pokemons;