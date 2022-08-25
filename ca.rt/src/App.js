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
      <ListItem>{/*  //all custom components start with Capital letters */}
          {/*  Can't use xml in this area -  Hello List */}
      </ListItem>

    </div>
  );
}

export default App;
