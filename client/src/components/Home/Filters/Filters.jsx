// Styles & icons
import style from './Filters.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon, faDiamond } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useDispatch } from 'react-redux';

// Actions
import { sortAscByParam, sortDesByParam } from '../../../redux/actions';

const Filters = () => {
  const dispath = useDispatch()

  const clickHandler = (event) => {
    const param = event.target.textContent.toLowerCase().trim()
    dispath(sortAscByParam(param))
  }
  
  return <div className={style.filterBar}>
    <button onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faHandFist}/>Stroke</button>
    <button onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faShieldHalved}/>Defense</button>
    <button onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faHeart}/>Health</button>
    <button onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faDragon}/>Speed</button>
    <button><FontAwesomeIcon className={style.icon} icon={faDiamond}/>Catched</button>
  </div>
};

export default Filters;