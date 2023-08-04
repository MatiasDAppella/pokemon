// Style
import style from './ToggleBars.module.less';

// Hooks & constants
import { useState } from 'react';
import { SEARCH_BAR, SORT_BAR, FILTER_BAR } from '../../../constants';

// Components
import Sort from './Sort/Sort';
import Search from './Search/Search';
import Filter from './Filter/Filter';

const ToggleBars = () => {
  const [toggle, setToggle] = useState(FILTER_BAR)

  const clickHandler = (event) => {
    setToggle(event.target.id)
  };

  return <nav className={style.toggleBars}>
    <div className={style.toggleBox}>
      <button id={SEARCH_BAR} onClick={clickHandler} className={style.search}>Search</button>
      <button id={SORT_BAR} onClick={clickHandler} className={style.sort}>Sort</button>
      <button id={FILTER_BAR} onClick={clickHandler} className={style.filter}>Filter</button>

    </div>
    {(toggle === FILTER_BAR) ? <Filter/> : (toggle === SEARCH_BAR) ? <Search/> : <Sort/>}
  </nav>
};

export default ToggleBars;