import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js'
import Details from './pages/Details.js'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Products from './pages/Products'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<AboutUs/> } />
          <Route path='/contact' element={<Contact/> } />
          <Route path='/product/:id' element={<Details/> } />
          <Route path='/category/:category' element={<Products/> } />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

