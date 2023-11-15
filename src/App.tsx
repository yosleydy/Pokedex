import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Items, Pokemon, Pokemons, Home } from './pages';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/pokemons/:name' element={<Pokemon/>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
