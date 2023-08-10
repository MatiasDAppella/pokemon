// Styles & images
import style from './Card.module.less';
import pokeball from '../../../../assets/img/pokeball.png';

// Hooks
import { useNavigate } from 'react-router-dom';

// Components
import Tag from './Tag/Tag';
import Stats from './Stats/Stats';

const Card = (pokemon) => {
  const navigate = useNavigate()

  const clickHandler = () => {
    if (id) {
      navigate(`/detail/${id}`)
      return
    }
    navigate(`/detail/${apiid}`)
  };

  const { id, apiid, name, image, types, stroke, defense, health, speed } = pokemon

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
        <h4>{name}</h4>
      </div>

      <img className={style.image} src={image} alt="pokémon name" />
      <div className={style.shadow}></div>
    </div>

    <div className={style.infoBox}>
      {(id) && <img src={pokeball} alt="" />}
      <ul>{types.map(name => <Tag key={name} type={name}/>)}</ul>
    </div>
  </li>
};

export default Card;