// Styles
import style from './CreateForm.module.less';

// Hooks
import { useSelector } from 'react-redux';

// Components
import Tag from '../Home/Pokemons/Card/Tag/Tag';

const CreateForm = () => {
  const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png";
  const types = useSelector(state => state.types)

  const handleSubmit = () => {

  };

  const handleGenerate = () => {

  }

  return <form onSubmit={handleSubmit} className={style.form}>
    <h1>Create form</h1>

    <div className={style.container}>
      <div className={style.imageBox}>
        <img src={image} alt="" />
        <div className={style.inputBox}>
          <span>Edit</span>
          <input type="checkbox" name="checkbox"/>
          <input type="text" name="url" placeholder="url"/>
          <button type="button">Generate</button>
        </div>
      </div>

      <div className={style.infoBox}>
        <div className={style.dataBox}>
          <h3>Information</h3>
          <div>
            <span>Name:</span>
            <input type="text" name="name" placeholder="name"/>
            <span>Height:</span>
            <input type="text" name="height" placeholder="height"/>
            <span>Weight:</span>
            <input type="text" name="weight" placeholder="weight"/>
          </div>
        </div>

        <div className={style.statsBox}>
          <h3>Stats</h3>
          <div>
            <span>Stroke:</span>
            <input type="text" name="stroke" placeholder="stroke"/>
            <span>Defense:</span>
            <input type="text" name="defense" placeholder="defense"/>
            <span>Health:</span>
            <input type="text" name="health" placeholder="health"/>
            <span>Speed:</span>
            <input type="text" name="speed" placeholder="speed"/>
          </div>
        </div>
      </div>

      <div className={style.tagsBox}>{
        types?.map(type => {if (type.name !== "unknown") return <Tag key={type.id} type={type.name}/>})
      }</div>

      <button className={style.submitButton}>Done</button>
    </div>

  </form>
};

export default CreateForm;