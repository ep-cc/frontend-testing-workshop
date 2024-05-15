import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import Home from './Home';
import Search from './Search';
import Country from './Country';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/country/:cca3' element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
