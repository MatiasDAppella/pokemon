// Styles & images
import style from './CreateCard.module.less';
import shadow from '../../../../assets/img/shadow.png';

// Hooks
import { useNavigate } from 'react-router-dom';

const CreateCard = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/create')
  };

  return <li onClick={handleClick} className={style.createCard}>
    <img src={shadow} alt="" />
    <h2>Create pokemon</h2>
  </li>
};

export default CreateCard;