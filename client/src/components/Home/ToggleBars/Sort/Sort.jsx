// Styles & icons
import style from './Sort.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Actions & constants
import { sortAscByParam, sortDesByParam } from '../../../../redux/actions';
import { DES, STROKE, DEFENSE, HEALTH, SPEED } from '../../../../constants';

const Sort = () => {
  const dispath = useDispatch()
  const displayConfig = useSelector(state => state.displayConfig)

  const clickHandler = (event) => {
    const param = event.target.id
    
    if (displayConfig.method === DES && displayConfig.sort === param) dispath(sortAscByParam(param))
    else dispath(sortDesByParam(param))
  }
  
  return <div className={style.sortBar}>
    <button id={STROKE} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faHandFist}/>Stroke</button>
    <button id={DEFENSE} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faShieldHalved}/>Defense</button>
    <button id={HEALTH} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faHeart}/>Health</button>
    <button id={SPEED} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faDragon}/>Speed</button>
  </div>
};

export default Sort;