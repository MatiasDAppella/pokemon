// Styles
import style from './Navigate.module.less';
import logo from '../../../assets/img/logo.png';

// Hooks
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions & types
import {
  toggleAll,
  toggleSearch,
  toggleCatched,
  toggleFree
} from '../../../redux/actions';
import { TOGGLE_ALL, TOGGLE_CATCHED, TOGGLE_FREE, TOGGLE_SEARCH } from '../../../redux/types';

// Components
import Search from './Search/Search';
import Sort from './Sort/Sort';

const Navigate = () => {
  const filter = useSelector(state => state.displayConfig.filter)
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  };

  return <header className={style.navigate}>
    <div className={style.container}>
      <div className={style.filterBox}>
        <img src={logo} alt=""/>
        <ul>
          <li className={(filter === TOGGLE_ALL) && style.selected} onClick={() => dispatch(toggleAll())}>All</li>
          <li className={(filter === TOGGLE_SEARCH) && style.selected} onClick={() => dispatch(toggleSearch())}>Wanted</li>
          <li className={(filter === TOGGLE_CATCHED) && style.selected} onClick={() => dispatch(toggleCatched())}>Catched</li>
          <li className={(filter === TOGGLE_FREE) && style.selected} onClick={() => dispatch(toggleFree())}>Free</li>
        </ul>
      </div>

      <div className={style.toggleBars}>
        <button className={style.btn} hidden={(!toggle)} onClick={handleToggle}>Search</button>
        <div className={style.displayBox}>
          {(!toggle) ? <Search/> : <Sort/>}
        </div>
        <button className={style.btn} hidden={(toggle)} onClick={handleToggle}>Sort</button>
      </div>
    </div>
  </header>
};

export default Navigate;