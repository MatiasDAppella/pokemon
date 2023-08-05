import style from './Detail.module.less';

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
      <div className={style.imageBox}></div>
      <div className={style.infoBox}></div>
      <div className={style.catchBox}></div>
    </div>
  </main>
};

export default Detail;