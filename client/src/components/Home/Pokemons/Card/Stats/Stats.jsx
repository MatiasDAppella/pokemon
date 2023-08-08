// Styles & icons
import style from './Stats.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useSelector } from 'react-redux';

const Stats = ({ stroke, defense, health, speed, apiid }) => {
  const displayConfig = useSelector(state => state.displayConfig)

  return <div className={style.stats}>{
      (displayConfig.sort === "stroke") ? <><FontAwesomeIcon className={style.stroke} icon={faHandFist}/>{stroke}</>
    : (displayConfig.sort === "defense") ? <><FontAwesomeIcon className={style.defense} icon={faShieldHalved}/>{defense}</>
    : (displayConfig.sort === "health") ? <><FontAwesomeIcon className={style.health} icon={faHeart}/>{health}</>
    : (displayConfig.sort === "speed") ? <><FontAwesomeIcon className={style.speed} icon={faDragon}/>{speed}</>
    : <span>{(apiid) ? apiid : "?"}</span>
  }</div>
};

export default Stats;