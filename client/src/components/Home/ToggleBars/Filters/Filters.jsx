// Styles & icons
import style from './Filters.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon, faDiamond } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useDispatch } from 'react-redux';

// Actions
import { sortAscByParam, sortDesByParam } from '../../../../redux/actions';
import { useState } from 'react';

const Filters = () => {
  const dispath = useDispatch()
  const [isSame, setIsSame] = useState({ last: "", toggle: false })

  const clickHandler = (event) => {
    const param = event.target.textContent.toLowerCase().trim()

    if (param !== isSame.last) setIsSame({ ...isSame, toggle: !isSame.toggle })
    else setIsSame({ last: param, toggle: false })
    
    if (isSame.toggle) dispath(sortAscByParam(param))
    else dispath(sortDesByParam(param))
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