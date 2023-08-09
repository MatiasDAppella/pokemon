// Styles & images
import style from './Loading.module.less';
import pokeball from '../../assets/img/pokeball.png';

const Loading = () => {
  return <div className={style.loading}>
    <img src={pokeball} alt="" />
    <h2>Loading</h2>
  </div>
};

export default Loading;