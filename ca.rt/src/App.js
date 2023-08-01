import './App.css';
import './components/ListItems/ListItem'
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/SubHeader.js'
import Products from './components/Products/Products';
import Shop from './components/Shop/Shop';
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
import ShopProduct from './components/Shop/ShopProduct';
import ShopCategory from './components/Shop/ShopCategory';

function App() {

  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth)
  const ShopState = useSelector(state => state.Shop)
  console.log('authstate ---->>>> ', authState)
  console.log('ShophState ---->>>> ', ShopState)

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
          {
            !ShopState?.IsAShop &&
            <Route path='/' exact element={<Products />}> </Route>
          }          
          {
            ShopState?.IsAShop &&
            <Route path='/Shop/ShopHome' exact element={<Shop />}> </Route>
          }
          {
            //ShopState?.IsAShop &&
            <Route path='/Shop/ShopHome/ShopProduct' exact element={<ShopProduct/>}></Route>
          }
          {
            ShopState?.IsAShop &&
            <Route path='/Shop/ShopHome/ShopCategory' exact element={<ShopCategory/>}></Route>
          }

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
