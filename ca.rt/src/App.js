import './App.css';
import './components/ListItems/ListItem'
import Header from './components/Layouts/Header';
import Subheader from './components/Layouts/SubHeader.js'
import Products from './components/Products/Products';

function App() {
  return (
    <div className="Container">
      <Header></Header>
      <Subheader></Subheader>
      <Products></Products>
    </div>
  );
}

export default App;
