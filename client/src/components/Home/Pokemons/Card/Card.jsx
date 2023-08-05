// Styles
import style from './Card.module.less';

// Hooks
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
import Tag from './Tag/Tag';
import Stats from './Stats/Stats';

const Card = (pokemon) => {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(`/detail/${apiid}`)
  };

  const { apiid, name, image, types, stroke, defense, health, speed } = pokemon
  const filter = useSelector(state => state.filteredBy)

  return <li className={style.card} onClick={clickHandler}>
    <div className={style.imgBox}>
      <div className={style.data}>
        <Stats className={style.stat}
          stroke={stroke}
          defense={defense}
          health={health}
          speed={speed}
          apiid={apiid}
        ></Stats>
        <h2>{name}</h2>
      </div>

      <img src={image} alt="pokémon name" />
      <div className={style.shadow}></div>
    </div>

    <div className={style.infoBox}>
      <ul>{types.map(name => <Tag key={name} type={name}/>)}</ul>
    </div>
  </li>
};

export default Card;