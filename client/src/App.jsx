import './App.css';

// React router
import { Route, Routes } from 'react-router-dom';

// Hooks
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Actions
import { renderFirstPokemons, createTypesInDatabase } from './redux/actions';

// Components
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreateForm from './components/CreateForm/CreateForm';

function App(){
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(renderFirstPokemons())
    dispatch(createTypesInDatabase())
  }, []);

  return <Routes>

    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/detail/:id' element={<Detail/>}/>
    <Route path='/create' element={<CreateForm/>}/>

  </Routes>
};

export default App;
