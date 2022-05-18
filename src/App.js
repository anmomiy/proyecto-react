import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardList from './components/CardList/CardList'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CardList title={"Productos Recomendados"} />
      <CardList title={"Alimento para Mascotas"} />
    </div>
  );
}

export default App;

