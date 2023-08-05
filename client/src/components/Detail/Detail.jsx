// Styles & images
import style from './Detail.module.less';
import pokeball from '../../assets/img/pokeball.png';

// Components
import Tag from '../Home/Pokemons/Card/Tag/Tag';

const pokemon = {
  "name": "farigiraf",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png",
  "health": 120,
  "stroke": 90,
  "defense": 70,
  "speed": 60,
  "height": 32,
  "weight": 1600,
  "apiid": "981",
  "types": [
    "normal",
    "psychic"
  ]
};

const Detail = () => {
  return <main className={style.detail}>
    <div className={style.container}>
      <div className={style.imageBox}>
        <span>{(pokemon.apiid) ? pokemon.apiid : '???'}</span>
        <img src={pokemon.image} alt="pokémon image"/>
      </div>

      <div className={style.infoBox}>
        <h1>{pokemon.name}</h1>
        <div className={style.bodyInfo}>
          <span>Height: {pokemon.height}</span>
          <span>Weight: {pokemon.weight}</span>
        </div>
        <div className={style.stats}>
          <span>Health: {pokemon.health}</span>
          <span>Stroke: {pokemon.stroke}</span>
          <span>Defense: {pokemon.defense}</span>
          <span>Speed: {pokemon.speed}</span>
        </div>
        <div className={style.tags}>{
          pokemon.types.map(type => <Tag key={type} type={type}/>)
        }</div>
      </div>
        
      <button className={style.catchButton}>Catch in pokeball</button>
    </div>
  </main>
};

export default Detail;