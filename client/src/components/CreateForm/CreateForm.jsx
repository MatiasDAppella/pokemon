// Styles
import style from './CreateForm.module.less';

// Hooks
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// Functions
import { imageRequest } from './image';
import { validateName, validateInteger, removeInitialCero } from './validate';

// Components
import Tag from '../Home/Pokemons/Card/Tag/Tag';

const CreateForm = () => {
  const [image, setImage] = useState("")
  const [form, setForm] = useState({
    name: "",
    height: 0,
    weight: 0,
    stroke: 0,
    defense: 0,
    health: 0,
    speed: 0,
    image,
    types: []
  })

  const globalTypes = useSelector(state => state.types)
  const [types, setTypes] = useState({ unselected: [], selected: [] })

  const handleGenerate = () => {
    imageRequest(setImage)
  }

  useEffect(() => {
    imageRequest(setImage)
    setTypes({...types, unselected: [...globalTypes.filter(e => e.name !== "unknown").map(e => e.name)]})
  }, [])

  const handleSelection = (name) => {
    if (types.unselected.includes(name)){
      setTypes({...types,
        unselected: [...types.unselected.filter(e => e !== name)],
        selected: [...types.selected, name]
      })
    }
    else {
      setTypes({...types,
        unselected: [...types.unselected, name],
        selected: [...types.selected.filter(e => e !== name)]
      })
    }
  };

  const handleChange = (event) => {
    const property = event.target.name
    let value = event.target.value

    switch (property){
      case "name":
        if (validateName(value)) setForm({...form, [property]: value.toLowerCase() })
        break;

      default:
        if (!validateInteger(value)) break;
        value = removeInitialCero(value)
        setForm({...form, [property]: value })
        break;
    }
  };
  
  const handleSubmit = () => {

  };

  return <form onSubmit={handleSubmit} className={style.form}>
    <h1>Create pokemon</h1>

    <div className={style.container}>
      <div className={style.imageBox}>
        <img src={image} alt="" />
        <div className={style.inputBox}>
          {/* <span>Edit</span>
          <input className={style.checkbox} type="checkbox" name="checkbox"/> */}
          <input value={image} disabled={true} type="text" name="url" placeholder="url"/>
          <button onClick={handleGenerate} type="button">Generate</button>
        </div>
      </div>

      <div className={style.infoBox}>
        <div className={style.dataBox}>
          <h3>Information</h3>
          <div>
            <span>Name:</span>
            <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="name"/>
            <span>Height:</span>
            <input onChange={handleChange} value={form.height} type="text" name="height" placeholder="height"/>
            <span>Weight:</span>
            <input onChange={handleChange} value={form.weight} type="text" name="weight" placeholder="weight"/>
          </div>
        </div>

        <div className={style.statsBox}>
          <h3>Stats</h3>
          <div>
            <span>Stroke:</span>
            <input onChange={handleChange} value={form.stroke} type="text" name="stroke" placeholder="stroke"/>
            <span>Defense:</span>
            <input onChange={handleChange} value={form.defense} type="text" name="defense" placeholder="defense"/>
            <span>Health:</span>
            <input onChange={handleChange} value={form.health} type="text" name="health" placeholder="health"/>
            <span>Speed:</span>
            <input onChange={handleChange} value={form.speed} type="text" name="speed" placeholder="speed"/>
          </div>
        </div>
      </div>
      
      {(types.selected.length > 0) && <div className={style.tagsBox}>{
        types.selected?.map(type => {if (type !== "unknown") return <Tag handleSelection={handleSelection} key={type} type={type}/>})
      }</div>}

      <div className={(types.unselected.length > 17) ? style.tagsBox : style.tagsBoxMuted}>{
        types.unselected?.map(type => {if (type !== "unknown") return <Tag handleSelection={handleSelection} key={type} type={type}/>})
      }</div>

      <button className={style.submitButton}>Done</button>
    </div>

  </form>
};

export default CreateForm;