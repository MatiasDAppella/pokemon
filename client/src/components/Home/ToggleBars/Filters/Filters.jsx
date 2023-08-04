// Styles & icons
import style from './Filters.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon, faDiamond } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Actions & constants
import { sortAscByParam, sortDesByParam } from '../../../../redux/actions';
import { DES, STROKE, DEFENSE, HEALTH, SPEED } from '../../../../constants';

const Filters = () => {
  const dispath = useDispatch()
  const filteredBy = useSelector(state => state.filteredBy)

  const clickHandler = (event) => {
    const param = event.target.id
    
    if (filteredBy.method === DES) dispath(sortAscByParam(param))
    else dispath(sortDesByParam(param))
  }
  
  return <div className={style.filterBar}>
    <button id={STROKE} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faHandFist}/>Stroke</button>
    <button id={DEFENSE} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faShieldHalved}/>Defense</button>
    <button id={HEALTH} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faHeart}/>Health</button>
    <button id={SPEED} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faDragon}/>Speed</button>
    <button><FontAwesomeIcon className={style.icon} icon={faDiamond}/>Catched</button>
  </div>
};

export default Filters;