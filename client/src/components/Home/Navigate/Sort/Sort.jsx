// Styles & icons
import style from './Sort.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon, faA } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// Actions & constants
import {
  sortAscByStroke,
  sortDesByStroke,
  sortAscByDefense,
  sortDesByDefense,
  sortAscByHealth,
  sortDesByHealth,
  sortAscBySpeed,
  sortDesBySpeed,
  sortAscAlpha,
  sortDesAlpha
} from '../../../../redux/actions';

const Sort = () => {
  const dispatch = useDispatch()
  const initialMethods = {
    stroke: true,
    defense: true,
    health: true,
    speed: true,
    alpha: true
  }
  const [toogleMethod, setToggleMethod] = useState(initialMethods)

  const clickHandler = (event) => {
    const sort = event.target.id

    switch (sort){
      case "STROKE":
        if (!toogleMethod.stroke) dispatch(sortAscByStroke())
        else dispatch(sortDesByStroke())
        return setToggleMethod({ ...initialMethods, stroke: !toogleMethod.stroke })
      case "DEFENSE":
        if (!toogleMethod.defense) dispatch(sortAscByDefense())
        else dispatch(sortDesByDefense())
        return setToggleMethod({ ...initialMethods, defense: !toogleMethod.defense })
      case "HEALTH":
        if (!toogleMethod.health) dispatch(sortAscByHealth())
        else dispatch(sortDesByHealth())
        return setToggleMethod({ ...initialMethods, health: !toogleMethod.health })
      case "SPEED":
        if (!toogleMethod.speed) dispatch(sortAscBySpeed())
        else dispatch(sortDesBySpeed())
        return setToggleMethod({ ...initialMethods, speed: !toogleMethod.speed })
      case "ALPHA":
        if (!toogleMethod.alpha) dispatch(sortAscAlpha())
        else dispatch(sortDesAlpha())
        return setToggleMethod({ ...initialMethods, alpha: !toogleMethod.alpha })
    }
  };

  return <div className={style.sortBox}>
    <div className={style.separator}/>
    <ul>
      <li id={"ALPHA"} onClick={clickHandler}>Alphabetically</li>
      <li id={"STROKE"} onClick={clickHandler}>Stroke</li>
      <li id={"DEFENSE"} onClick={clickHandler}>Defense</li>
      <li id={"HEALTH"} onClick={clickHandler}>Health</li>
      <li id={"SPEED"} onClick={clickHandler}>Speed</li>
    </ul>
  </div>
};

export default Sort;