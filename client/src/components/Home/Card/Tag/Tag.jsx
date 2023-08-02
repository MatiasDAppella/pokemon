// Styles
import style from './Tag.module.less';

const Tag = ({ type }) => {
  return <li className={style.tag}>
    <span className={
        (type === "normal") ? style.normal
      : (type === "fighting") ? style.fighting
      : (type === "flying") ? style.flying
      : (type === "poison") ? style.poison
      : (type === "ground") ? style.ground
      : (type === "rock") ? style.rock
      : (type === "bug") ? style.bug
      : (type === "ghost") ? style.ghost
      : (type === "steel") ? style.steel
      : (type === "fire") ? style.fire
      : (type === "water") ? style.water
      : (type === "grass") ? style.grass
      : (type === "electric") ? style.electric
      : (type === "psychic") ? style.psychic
      : (type === "ice") ? style.ice
      : (type === "dragon") ? style.dragon
      : (type === "dark") ? style.dark
      : (type === "fairy") ? style.fairy
      : (type === "shadow") ? style.shadow
      : style.unknown
    }>{type}</span>
  </li>
};

export default Tag;