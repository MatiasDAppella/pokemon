// Styles & icons
import style from './Stats.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon, faDiamond } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useSelector } from 'react-redux';

const Stats = ({ stroke, defense, health, speed }) => {
  const filteredBy = useSelector(state => state.filteredBy)

  return <div className={style.stats}>
    <FontAwesomeIcon className={
        (filteredBy === "stroke") ? style.stroke
      : (filteredBy === "defense") ? style.defense
      : (filteredBy === "health") ? style.health
      : (filteredBy === "speed") ? style.speed
      : style.catched
    } icon={
        (filteredBy === "stroke") ? faHandFist
      : (filteredBy === "defense") ? faShieldHalved
      : (filteredBy === "health") ? faHeart
      : (filteredBy === "speed") ? faDragon
      : faDiamond
    }/>{
        (filteredBy === "stroke") ? stroke
      : (filteredBy === "defense") ? defense
      : (filteredBy === "health") ? health
      : (filteredBy === "speed") ? speed
      : "Catched"
    }</div>
};

export default Stats;