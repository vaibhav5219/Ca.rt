import './App.css';
import './components/ListItems/ListItem'
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/SubHeader.js'
import Products from './components/Products/Products';
import Timer from './components/Timer/Timer'
import { useEffect, useState } from 'react';
import User from './components/User/User';
import { Route, Routes, redirect } from 'react-router-dom';
import AuthIndex from './components/Auth/Index';
import { checkIsLoggedIn } from './actions/auth';
import { useDispatch, useSelector } from 'react-redux';
//import CustomerForm from 'e:/GitHub/React/ca.rt/src/components/Form/CustomerForm'
import CustomerForm from './components/Form/CustomerForm';
import ShopForm from './components/Form/ShopForm';

function App() {

  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth)
  console.log('authstate ---->>>> ', authState)

  useEffect(() => {
    dispatch(checkIsLoggedIn(() => { }
    ))
  }, [])

  return (
    <div className="Container">
      <Header></Header>
      <Subheader />
      <div >
        <Routes>
          {
            !authState.token &&
            <Route path='/:login' exact element={<AuthIndex />}>
            </Route>
          }
          {
            !authState.token &&
            <Route path='/:signup' exact element={<AuthIndex />}>
            </Route>
          }


          <Route path='/CustomerForm' exact element={<CustomerForm />}>
          </Route>

          <Route path='/ShopForm' exact element={<ShopForm />}>
          </Route>
          <Route path='/' exact element={<Products />}> </Route>
          {/*
           {
            !authState.Role.IsACustomer &&
            <Route path='/' exact element={<Products />}> </Route>
          } */}

          <Route path='/Shop/ShopHome' exact element={<Products />}> </Route>

          {/* <Route path='/404' exact element={<h1>Page Not Found!</h1>}>
          </Route> */}
          <Route path='/:category?' exact element={<Products />}>
          </Route>
          <Route path='*' element={<h1>Page Not Found !</h1>}>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
