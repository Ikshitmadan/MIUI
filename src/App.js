import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Slider } from './Components/Slider';
import { Products } from './Components/Products';
import { Home } from './Pages/Home';
import { Category } from './Pages/Category';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { Product } from './Components/Product';

function App() {
  return (
  <BrowserRouter>
    <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Category/>}/>
  <Route path="/product" element={<Product/>}/>
  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
