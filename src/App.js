import React,{useEffect,useState} from 'react'

import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home';
import Movielist from './components/Movielist';
import MovieDetail from './components/MovieDetail'


function App() {
  return (
    <div className="App">
<Router>
    <Header/>
  <Routes>
    <Route index element={<Home/>}></Route>
    <Route path="movie/:id" element={<MovieDetail/>}></Route>
    <Route path="movies/:type" element={<Movielist/>}></Route>
    <Route path="/*" element={<h1>Error Page</h1>}></Route>
 
  </Routes>
</Router>
    </div>
  );
}

export default App;
