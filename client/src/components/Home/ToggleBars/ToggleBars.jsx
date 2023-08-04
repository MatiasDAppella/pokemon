// Style
import style from './ToggleBars.module.less';

// Hooks
import { useState } from 'react';

// Components
import Filters from './Filters/Filters';
import Search from './Search/Search';

const ToggleBars = () => {
  const [toggle, setToggle] = useState(true)

  const clickHandler = (event) => {
    if (event.target.textContent === "Search") setToggle(true)
    else setToggle(false)
  };

  return <nav className={style.toggleBars}>
    <div className={style.toggleBox}>
      <button onClick={clickHandler} className={style.search}>Search</button>
      <button onClick={clickHandler} className={style.filter}>Filter</button>
    </div>
    {(toggle) ? <Search/> : <Filters/>}
  </nav>
};

export default ToggleBars;