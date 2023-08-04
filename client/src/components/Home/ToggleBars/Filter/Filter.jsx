// Styles
import style from './Filter.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faBarsStaggered, faHeart } from '@fortawesome/free-solid-svg-icons';

// Actions & constants
import { ALL, SEARCH, CATCHED } from '../../../../constants';

const Filter = () => {

  const clickHandler = () => {

  };

  return <div className={style.filterBar}>
    <button id={ALL} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faStarOfLife}/>All</button>
    <button id={SEARCH} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faBarsStaggered}/>Wanted</button>
    <button id={CATCHED} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faHeart}/>Catched</button>
  </div>
};

export default Filter;