import './App.css';
import './components/ListItems/ListItem'
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/SubHeader.js'
import Products from './components/Products/Products';
import Timer from './components/Timer/Timer'
import {useState} from 'react';

 function App() {
//   const[toggle, setToggle] = useState(false);
  const[cartItems, setCartItems] = useState(0);

  const handleAddItems = () =>{
    setCartItems( setCartItems => setCartItems+1)
  }
  const handleRemoveItems = () =>{
    setCartItems( setCartItems => setCartItems-1)
  }

  return (
    <div className="Container">
      <Header count={cartItems}></Header>
      <Subheader></Subheader>
      <Products onAddItems={handleAddItems} onRemoveItems={handleRemoveItems} > </Products>
      
    </div>
  );
}

export default App;
