// Styles & icons
import style from './Stats.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useSelector } from 'react-redux';

const Stats = ({ stroke, defense, health, speed, apiid }) => {
  const filteredBy = useSelector(state => state.filteredBy)

  return <div className={style.stats}>
    <FontAwesomeIcon className={
        (filteredBy.filter === "stroke") ? style.stroke
      : (filteredBy.filter === "defense") ? style.defense
      : (filteredBy.filter === "health") ? style.health
      : (filteredBy.filter === "speed") ? style.speed
      : style.catched
    } icon={
        (filteredBy.filter === "stroke") ? faHandFist
      : (filteredBy.filter === "defense") ? faShieldHalved
      : (filteredBy.filter === "health") ? faHeart
      : (filteredBy.filter === "speed") ? faDragon
      : {}
    }/>{
        (filteredBy.filter === "stroke") ? stroke
      : (filteredBy.filter === "defense") ? defense
      : (filteredBy.filter === "health") ? health
      : (filteredBy.filter === "speed") ? speed
      : <span>{(apiid) ? apiid : "?"}</span>
    }</div>
};

export default Stats;