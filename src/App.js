import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1 className="text-3xl font-bold text-rose-200">Elle&Chic</h1>
      <p>Centro de estética</p>
      <ItemListContainer greeting="Sofía"/>
    </div>
  );
}

export default App;
