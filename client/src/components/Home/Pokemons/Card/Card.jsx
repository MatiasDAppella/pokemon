// Styles
import style from './Card.module.less';

// Hooks
import { useSelector } from 'react-redux';

// Components
import Tag from './Tag/Tag';
import Stats from './Stats/Stats';

const Card = (pokemon) => {
  const { apiid, name, image, types, stroke, defense, health, speed } = pokemon
  const filter = useSelector(state => state.filteredBy)

  return <li className={style.card}>
    <div className={style.imgBox}>
      <div className={style.data}>
        {
          (filter === "none")
          ? <span>{(apiid) ? apiid : "?"}</span>
          : <Stats stroke={stroke} defense={defense} health={health} speed={speed}/>
        }
        
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