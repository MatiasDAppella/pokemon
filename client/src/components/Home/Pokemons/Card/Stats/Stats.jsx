// Styles & icons
import style from './Stats.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useSelector } from 'react-redux';

// Constants
import { STROKE, DEFENSE, HEALTH, SPEED } from '../../../../../constants';

const Stats = ({ stroke, defense, health, speed, apiid }) => {
  const filteredBy = useSelector(state => state.filteredBy)

  return <div className={style.stats}>{
      (filteredBy.filter === STROKE) ? <><FontAwesomeIcon className={style.stroke} icon={faHandFist}/>{stroke}</>
    : (filteredBy.filter === DEFENSE) ? <><FontAwesomeIcon className={style.defense} icon={faShieldHalved}/>{defense}</>
    : (filteredBy.filter === HEALTH) ? <><FontAwesomeIcon className={style.health} icon={faHeart}/>{health}</>
    : (filteredBy.filter === SPEED) ? <><FontAwesomeIcon className={style.speed} icon={faDragon}/>{speed}</>
    : <span>{(apiid) ? apiid : "?"}</span>
  }</div>
};

export default Stats;