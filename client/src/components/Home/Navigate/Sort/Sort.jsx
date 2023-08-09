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
import { ALPHA, STROKE, DEFENSE, HEALTH, SPEED } from '../../../../constants';

const Sort = () => {
  const dispatch = useDispatch()
  const [lastSort, setLastSort] = useState("")
  const [toggle, setToggle] = useState(true)

  const clickHandler = () => {
    setToggle(!toggle)
    switch (lastSort){
      case "Alphabetically":
        return (toggle)
        ? dispatch(sortAscAlpha())
        : dispatch(sortDesAlpha())
      case "Stroke":
        return (toggle)
        ? dispatch(sortAscByStroke())
        : dispatch(sortDesByStroke())
      case "Defense":
        return (toggle)
        ? dispatch(sortAscByDefense())
        : dispatch(sortDesByDefense())
      case "Health":
        return (toggle)
        ? dispatch(sortAscByHealth())
        : dispatch(sortDesByHealth())
      case "Speed":
        return (toggle)
        ? dispatch(sortAscBySpeed())
        : dispatch(sortDesBySpeed())
    }
  }

  const changeHandler = (event) => {
    const sort = event.target.value

    switch (sort){
      case "Alphabetically":
        if (lastSort !== sort) setLastSort(sort)
        return (toggle)
          ? dispatch(sortDesAlpha())
          : dispatch(sortAscAlpha())
      case "Stroke":
        if (lastSort !== sort) setLastSort(sort)
        return (toggle)
          ? dispatch(sortDesByStroke())
          : dispatch(sortAscByStroke())
      case "Defense":
        if (lastSort !== sort) setLastSort(sort)
        return (toggle)
          ? dispatch(sortDesByDefense())
          : dispatch(sortAscByDefense())
      case "Health":
        if (lastSort !== sort) setLastSort(sort)
        return (toggle)
          ? dispatch(sortDesByHealth())
          : dispatch(sortAscByHealth())
      case "Speed":
        if (lastSort !== sort) setLastSort(sort)
        return (toggle)
          ? dispatch(sortDesBySpeed())
          : dispatch(sortAscBySpeed())
    }
  }

  return <div className={style.sort}>
    <div className={style.separator}/>
    <div className={style.sortBox}>
      <select onChange={changeHandler}>
        <option disabled={true}>Select order</option>
        <option>Alphabetically</option>
        <option>Stroke</option>
        <option>Defense</option>
        <option>Health</option>
        <option>Speed</option>
      </select>
      <button className={style.btn} onClick={clickHandler}>
        {(toggle) ? "DES" : "ASC"}
      </button>
    </div>
  </div>
};

export default Sort;