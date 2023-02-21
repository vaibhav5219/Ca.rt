import './App.css';
import './components/ListItems/ListItem'
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/SubHeader.js'
import Products from './components/Products/Products';
import Timer from './components/Timer/Timer'
import {useEffect, useState} from 'react';
import User from './components/User/User';
import { Route, Routes, redirect } from 'react-router-dom';
import AuthIndex from './components/Auth/Index';
import { checkIsLoggedIn } from './actions/auth';
import { useDispatch, useSelector } from 'react-redux';

 function App() {

  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth)

  useEffect(()=>{
    dispatch(checkIsLoggedIn( ()=>{}
    ))
  }, [])

  return (
    <div className="Container">
      <Header></Header>
      <Subheader/>
      <Routes>
        {
          !authState.idToken &&
          <Route path='/:login' exact element={<AuthIndex/>}>
          </Route>
        }
        {
          !authState.idToken &&
          <Route path='/:signup' exact element={<AuthIndex/>}>
          </Route>
        }
        <Route path='/' exact  element={<Products/>}>
        </Route>
        {/* <Route path='/404' exact element={<h1>Page Not Found!</h1>}>
        </Route> */}
        <Route path='/:category?' exact element={<Products/>}>
        </Route>
        <Route path='*'  element={<h1>Page Not Found !</h1>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
