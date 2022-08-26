import './App.css';
import './components/ListItem'
import ListItem from './components/ListItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!
        </p>
      </header>
      
      <ListItem data={{
        discountedPrice: 340,
        price: 450,
        title: "Title of the item",
        thumbnail: "cart.png"
      }}> {/*  Can't use xml in this area -  Hello List */}
      </ListItem>

    </div>
  );
}

export default App;
