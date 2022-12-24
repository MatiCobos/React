import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title='Pag title' />
    </div>
  );
}

export default App;
