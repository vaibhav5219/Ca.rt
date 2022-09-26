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
  const[cartItems, setCartItems] = useState([]);

  const handleAddItems = item =>{
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id )

    if(index > -1){
      items[index] = item
    }
    else{
      items.push(items)
    }
    setCartItems([...items])
    //setCartItems( setCartItems => setCartItems+1)
  }
  const handleRemoveItems = item =>{
    //setCartItems( setCartItems => setCartItems-1)
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id )

    if(items[index].quantity === 0)
    {
      items.splice(index, 1)
    }else{
      items[index] = item
    }
    setCartItems([...items])
  }

  return (
    <div className="Container">
      <Header count={cartItems.length} items={cartItems}></Header>
      <Subheader></Subheader>
      <Products onAddItems={handleAddItems} onRemoveItems={handleRemoveItems} > </Products>
      
    </div>
  );
}

export default App;
