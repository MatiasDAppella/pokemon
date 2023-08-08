// Styles
import style from './Filter.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faBarsStaggered, faHeart } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useDispatch } from 'react-redux';

// Actions & types
import { toggleAll, toggleSearch, toggleCatched, toggleFree } from '../../../../redux/actions';
import { TOGGLE_ALL, TOGGLE_SEARCH, TOGGLE_CATCHED, TOGGLE_FREE } from '../../../../redux/types';

const Filter = () => {
  const dispatch = useDispatch()

  return <div className={style.filterBar}>
    <button onClick={() => dispatch(toggleAll())}><FontAwesomeIcon className={style.icon} icon={faStarOfLife}/>All</button>
    <button onClick={() => dispatch(toggleSearch())}><FontAwesomeIcon className={style.icon} icon={faBarsStaggered}/>Wanted</button>
    <button onClick={() => dispatch(toggleCatched())}><FontAwesomeIcon className={style.icon} icon={faHeart}/>Catched</button>
    <button onClick={() => dispatch(toggleFree())}><FontAwesomeIcon className={style.icon} icon={faHeart}/>Free</button>
  </div>
};

export default Filter;