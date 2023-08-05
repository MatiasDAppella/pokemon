import './App.css';

// React router
import { Route, Routes } from 'react-router-dom';

// Components
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

function App(){
  return <Routes>

    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/detail/:id' element={<Detail/>}/>

  </Routes>
};

export default App;
