// Styles & icons
import style from './Filters.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faShieldHalved, faHeart, faDragon, faDiamond } from '@fortawesome/free-solid-svg-icons';

const Filters = () => {
  
  return <div className={style.filterBar}>
    <button><FontAwesomeIcon className={style.icon} icon={faHandFist}/>Attack</button>
    <button><FontAwesomeIcon className={style.icon} icon={faShieldHalved}/>Defense</button>
    <button><FontAwesomeIcon className={style.icon} icon={faHeart}/>Health</button>
    <button><FontAwesomeIcon className={style.icon} icon={faDragon}/>Speed</button>
    <button><FontAwesomeIcon className={style.icon} icon={faDiamond}/>Catched</button>
  </div>
};

export default Filters;