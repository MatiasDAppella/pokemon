// Styles & images
import style from './Detail.module.less';
import pokeball from '../../assets/img/pokeball.png';

// Hooks
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getDetail, cleanDetail, catchInPokeball, releasePokemon } from '../../redux/actions';

// Components
import Tag from '../Home/Pokemons/Card/Tag/Tag';

const Detail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const detail = useSelector(state => state.detail)
  const dispatch = useDispatch()

  // warning
  const [warning, setWarning] = useState(false)

  const handleWarning = (event) => {
    switch (event.target.id){
      case "CANCEL":
        return setWarning(false)
      case "PROCEED":
        return ending()
    }
  }

  useEffect(() => {
    dispatch(getDetail(id))
    return () => dispatch(cleanDetail())
  }, [])

  const ending = () => {
    if (!detail.id) dispatch(catchInPokeball(detail))
    else dispatch(releasePokemon(detail.id.toString()))
    if (!detail.apiid) navigate('/home')
  }

  const handleClick = () => {
    return (!detail.apiid)
      ? setWarning(true)
      : ending()
  }

  return <main className={style.detail}>
    <div className={style.border}>
      <h1 className={style.title}>Detail</h1>
    </div>

    <div className={style.container}>
      <div className={style.imageBox}>
        {(detail.apiid) && <span>{detail.apiid}</span>}
        <img src={detail.image} alt="pokémon image"/>
      </div>

      <div className={style.infoBox}>
        <h1>{detail.name}</h1>
        <div className={style.bodyInfo}>
          <span>Height: {detail.height}</span>
          <span>Weight: {detail.weight}</span>
        </div>
        <div className={style.stats}>
          <span>Health: {detail.health}</span>
          <span>Stroke: {detail.stroke}</span>
          <span>Defense: {detail.defense}</span>
          <span>Speed: {detail.speed}</span>
        </div>
        <div className={style.tags}>
          {(detail.id) && <img src={pokeball} alt="" />}
          {detail.types?.map(type => <Tag key={type} type={type}/>)}
        </div>
      </div>
        
      <button onClick={handleClick} className={(!detail.id) ? style.catchButton : style.releaseButton}>{(!detail.id) ? "Catch in pokeball" : "Release from pokeball"}</button>
    </div>

    {(warning) && <div className={style.warning}>
      <div className={style.warningBorder}>
        <h1 className={style.warningTitle}>Warning</h1>
      </div>
      <p>You created this pokemon, if you want to release it you wont be able to get it back</p>
      <div className={style.warningButtons}>
        <button id="CANCEL" onClick={handleWarning} className={style.cancel}>Cancel</button>
        <button id="PROCEED" onClick={handleWarning} className={style.proceed}>Proceed</button>
      </div>
    </div>}
  </main>
};

export default Detail;