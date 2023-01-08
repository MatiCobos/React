import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title='Page title' />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
