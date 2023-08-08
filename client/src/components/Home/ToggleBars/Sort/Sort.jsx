// Styles & icons
import style from './Sort.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// Actions & constants
import { STROKE, DEFENSE, HEALTH, SPEED } from '../../../../constants';
import {
  sortAscByStroke,
  sortDesByStroke,
  sortAscByDefense,
  sortDesByDefense,
  sortAscByHealth,
  sortDesByHealth,
  sortAscBySpeed,
  sortDesBySpeed
} from '../../../../redux/actions';

const Sort = () => {
  const dispath = useDispatch()
  const [toogleMethod, setToggleMethod] = useState({
    stroke: true,
    defense: true,
    health: true,
    speed: true
  })

  const clickHandler = (event) => {
    const sort = event.target.id

    switch (sort){
      case STROKE:
        if (toogleMethod.stroke) dispath(sortAscByStroke())
        else dispath(sortDesByStroke())
        return setToggleMethod({...toogleMethod, stroke: !toogleMethod.stroke})
      case DEFENSE:
        if (toogleMethod.defense) dispath(sortAscByDefense())
        else dispath(sortDesByDefense())
        return setToggleMethod({...toogleMethod, defense: !toogleMethod.defense})
      case HEALTH:
        if (toogleMethod.health) dispath(sortAscByHealth())
        else dispath(sortDesByHealth())
        return setToggleMethod({...toogleMethod, health: !toogleMethod.health})
      case SPEED:
        if (toogleMethod.speed) dispath(sortAscBySpeed())
        else dispath(sortDesBySpeed())
        return setToggleMethod({...toogleMethod, speed: !toogleMethod.speed})
    }
  };
  
  return <div className={style.sortBar}>
    <button id={STROKE} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faHandFist}/>Stroke</button>
    <button id={DEFENSE} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faShieldHalved}/>Defense</button>
    <button id={HEALTH} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faHeart}/>Health</button>
    <button id={SPEED} onClick={clickHandler}><FontAwesomeIcon className={style.icon} icon={faDragon}/>Speed</button>
  </div>
};

export default Sort;