// Styles
import style from './Filter.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faBarsStaggered, faHeart } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Actions & types
import { toggleDisplay } from '../../../../redux/actions';
import { TOGGLE_ALL, TOGGLE_SEARCH, TOGGLE_CATCHED, TOGGLE_FREE } from '../../../../redux/types';

const Filter = () => {
  const displayConfig = useSelector(state => state.displayConfig)
  const dispatch = useDispatch()

  const clickHandler = (event) => {
    dispatch(toggleDisplay(event.target.id))
  };

  const catchedHandler = () => {
    if (displayConfig.filter !== TOGGLE_CATCHED) dispatch(toggleDisplay(TOGGLE_CATCHED))
    else dispatch(toggleDisplay(TOGGLE_FREE))
  };

  return <div className={style.filterBar}>
    <button id={TOGGLE_ALL} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faStarOfLife}/>All</button>
    <button id={TOGGLE_SEARCH} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faBarsStaggered}/>Wanted</button>
    <button onClick={catchedHandler}><FontAwesomeIcon className={style.icon} icon={faHeart}/>Catched</button>
  </div>
};

export default Filter;