// Styles & icons
import style from './Empty.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Empty = () => {
  return <div className={style.empty}>
    <FontAwesomeIcon icon={faX}/>
    <h2>No pokemons here</h2>
  </div>
};

export default Empty;