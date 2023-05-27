
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Addmovie from './components/Addmovie';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Movieview from './components/Movieview';
import Favorate from './components/Favorate';
import Search from './components/Search';
import Updatemovie from './components/Updatemovie';

function App() {
  return (
  <BrowserRouter>
    <div>
      <Navbar/>
     <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='/addmovie' element={ <Addmovie/>}></Route>
      <Route path='/movieview/:id' element={<Movieview/>}></Route>
      <Route path='/fav' element={<Favorate/>}></Route>
      <Route path='/search/:searchkey' element={<Search/>}></Route>
      <Route path='/updatemovie/:id' element={<Updatemovie/>}></Route>
      
     </Routes> 
     
    </div>
  </BrowserRouter>
  );
}

export default App;
