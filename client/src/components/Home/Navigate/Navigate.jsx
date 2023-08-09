// Styles
import style from './Navigate.module.less';
import logo from '../../../assets/img/logo.png';

// Hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import {
  toggleAll,
  toggleSearch,
  toggleCatched,
  toggleFree
} from '../../../redux/actions';

// Components
import Search from './Search/Search';
import Sort from './Sort/Sort';

const Navigate = () => {
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
          <li onClick={() => dispatch(toggleAll())}>All</li>
          <li onClick={() => dispatch(toggleSearch())}>Wanted</li>
          <li onClick={() => dispatch(toggleCatched())}>Catched</li>
          <li onClick={() => dispatch(toggleFree())}>Free</li>
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