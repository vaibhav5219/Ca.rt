// import './App.css';
// import './components/ListItems/ListItem'
// import Header from './components/Layouts/Header';
// import Subheader from './components/Layouts/SubHeader.js'
import  Products  from './components/Products/Products';
import ProductItem from './components/Products/ProductItem';
import ProductCategory from './components/Products/ProductCategory';
// import Timer from './components/Timer/Timer'
// import {useState} from 'react';
// import User from './components/User/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

 const App = () => {
  return (
    // <div className="Container">
    //   <Header ></Header>
    //   <Subheader></Subheader>
    //   <Products > </Products>
    // </div>
    <BrowserRouter>
      <div>
      <Routes>
          <Route path="/Products" element={<Products />} exact>
          </Route>
          <Route path="/Products/:id" element={<ProductCategory />} exact>
          </Route>
          <Route path={`/Product/:category${"([a-zA-Z]+)"}`} element={<ProductCategory />} exact>
          </Route>   { /*  Not working  */}
          <Route path={`/Product/:category${"([a-zA-Z]+)"}/:subcategory?`} element={<ProductCategory />} exact>
          </Route>
          <Route path="/Productscategory" element={<ProductCategory />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
      </Routes>
        {/* <Route path="/product/1">
          <ProductItem></ProductItem>
        </Route> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
