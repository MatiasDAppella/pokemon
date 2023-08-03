// Styles
import style from './Card.module.less';

// Components
import Tag from './Tag/Tag';

const Card = ({ apiid, name, image, types }) => {
  return <li className={style.card}>
    <div className={style.imgBox}>
      <div className={style.data}>
        <span>{(apiid)
          ? apiid
          : "?"
        }</span>
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