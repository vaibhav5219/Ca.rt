import './App.css';
import './components/ListItems/ListItem'
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/SubHeader.js'
import Products from './components/Products/Products';
import Timer from './components/Timer/Timer'
import {useState} from 'react';
import User from './components/User/User';
import { Route, Routes, redirect } from 'react-router-dom';

 function App() {
  return (
    <div className="Container">
      <Header></Header>
      <Subheader/>
      <Routes>
        <Route path='/404' exact element={<h1>Page Not Found!</h1>}>
        </Route>
        <Route path='/:category?' exact element={<Products/>}>
        </Route>
        <Route path='*'  element={<h1>Page Not Found !</h1>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
