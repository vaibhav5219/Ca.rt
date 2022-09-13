import './App.css';
import './components/ListItems/ListItem'
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/SubHeader.js'
import Products from './components/Products/Products';
import Timer from './components/Timer/Timer'
import {useState} from 'react';
import User from './components/User/User';

 function App() {
//   const[toggle, setToggle] = useState(false);
  
  return (
    <div className="Container">
      <Header></Header>
      <Subheader></Subheader>
      <Products></Products>
    </div>
  );
}

export default App;
