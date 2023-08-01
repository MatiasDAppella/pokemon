import './App.css';

// React router
import { Route, Routes } from 'react-router-dom';

// Components
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';

function App(){
  return <Routes>

    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>}/>

  </Routes>
};

export default App;
