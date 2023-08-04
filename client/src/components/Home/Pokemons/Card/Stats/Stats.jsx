// Styles & icons
import style from './Stats.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useSelector } from 'react-redux';

// Constants
import { STROKE, DEFENSE, HEALTH, SPEED } from '../../../../../constants';

const Stats = ({ stroke, defense, health, speed, apiid }) => {
  const displayConfig = useSelector(state => state.displayConfig)

  return <div className={style.stats}>{
      (displayConfig.sort === STROKE) ? <><FontAwesomeIcon className={style.stroke} icon={faHandFist}/>{stroke}</>
    : (displayConfig.sort === DEFENSE) ? <><FontAwesomeIcon className={style.defense} icon={faShieldHalved}/>{defense}</>
    : (displayConfig.sort === HEALTH) ? <><FontAwesomeIcon className={style.health} icon={faHeart}/>{health}</>
    : (displayConfig.sort === SPEED) ? <><FontAwesomeIcon className={style.speed} icon={faDragon}/>{speed}</>
    : <span>{(apiid) ? apiid : "?"}</span>
  }</div>
};

export default Stats;