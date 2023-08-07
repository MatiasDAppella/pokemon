// Styles & images
import style from './Detail.module.less';
import pokeball from '../../assets/img/pokeball.png';

// Hooks
import { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(getDetail(id))
    return () => dispatch(cleanDetail())
  }, [])

  const handleClick = () => {
    if (!detail.id) dispatch(catchInPokeball(detail))
    else dispatch(releasePokemon(detail.id.toString()))
    if (!detail.apiid) navigate('/home')
  }

  return <main className={style.detail}>
    <div className={style.container}>
      <div className={style.imageBox}>
        <span>{(detail.apiid) ? detail.apiid : '???'}</span>
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
        
      <button onClick={handleClick} className={style.catchButton}>Catch in pokeball</button>
    </div>
  </main>
};

export default Detail;