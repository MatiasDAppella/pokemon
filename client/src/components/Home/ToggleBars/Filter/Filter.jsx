// Styles
import style from './Filter.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faBarsStaggered, faHeart } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useDispatch } from 'react-redux';

// Actions & types
import { toggleDisplay } from '../../../../redux/actions';
import { TOGGLE_ALL, TOGGLE_SEARCH, TOGGLE_CATCHED } from '../../../../redux/types';

const Filter = () => {
  const dispatch = useDispatch()

  const clickHandler = (event) => {
    dispatch(toggleDisplay(event.target.id))
  };

  return <div className={style.filterBar}>
    <button id={TOGGLE_ALL} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faStarOfLife}/>All</button>
    <button id={TOGGLE_SEARCH} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faBarsStaggered}/>Wanted</button>
    <button id={TOGGLE_CATCHED} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faHeart}/>Catched</button>
  </div>
};

export default Filter;