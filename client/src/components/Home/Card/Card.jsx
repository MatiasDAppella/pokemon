// Styles
import style from './Card.module.less';

// Components
import Tag from './Tag/Tag';

const pokemon = {
  "name": "hawlucha",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png",
  "health": 78,
  "stroke": 92,
  "defense": 75,
  "speed": 118,
  "height": 8,
  "weight": 215,
  "apiid": "701",
  "types": [
    "fighting",
    "flying"
  ]
}

const Card = () => {
  return <li className={style.card}>
    <div className={style.imgBox}>
      <div className={style.data}>
        <span>{(pokemon.apiid)
          ? pokemon.apiid
          : "?"
        }</span>
        <h2>{pokemon.name}</h2>
      </div>

      <img src={pokemon.image} alt="pokémon name" />
      <div className={style.shadow}></div>
    </div>

    <div className={style.infoBox}>
      <ul>{pokemon.types.map(name => <Tag type={name}/>)}</ul>
    </div>
  </li>
};

export default Card;