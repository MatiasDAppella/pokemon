// Styles
import style from './Tag.module.less';

const Tag = ({ type, handleSelection }) => {
  return <li className={style.tag}>
   {(!handleSelection) && <span className={
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
    }>{type}</span>}
    {(handleSelection) && <span onClick={() => handleSelection(type)} className={
        (type === "normal") ? style.normalSelection
      : (type === "fighting") ? style.fightingSelection
      : (type === "flying") ? style.flyingSelection
      : (type === "poison") ? style.poisonSelection
      : (type === "ground") ? style.groundSelection
      : (type === "rock") ? style.rockSelection
      : (type === "bug") ? style.bugSelection
      : (type === "ghost") ? style.ghostSelection
      : (type === "steel") ? style.steelSelection
      : (type === "fire") ? style.fireSelection
      : (type === "water") ? style.waterSelection
      : (type === "grass") ? style.grassSelection
      : (type === "electric") ? style.electricSelection
      : (type === "psychic") ? style.psychicSelection
      : (type === "ice") ? style.iceSelection
      : (type === "dragon") ? style.dragonSelection
      : (type === "dark") ? style.darkSelection
      : (type === "fairy") ? style.fairySelection
      : (type === "shadow") ? style.shadowSelection
      : style.unknown
    }>{type}</span>}
  </li>
};

export default Tag;