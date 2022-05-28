import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js'
import Details from './pages/Details.js'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productos/:id' element={<Details/> } />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

