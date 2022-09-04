import './App.css';
import './components/ListItems/ListItem'
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/SubHeader.js'
import Products from './components/Products/Products';
import User from './components/User/User';

function App() {
  return (
    <div className="Container">
      <Header></Header>
      <Subheader></Subheader>
      <User></User>
      <Products></Products>
    </div>
  );
}

export default App;
