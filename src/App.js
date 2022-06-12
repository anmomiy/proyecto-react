import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js'
import Details from './pages/Details.js'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import {CartProvider} from './context/CartContext';
import './App.css';
function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/aboutus' element={<AboutUs/> } />
            <Route path='/cart' element={<Cart/> } />
            <Route path='/contact' element={<Contact/> } />
            <Route path='/product/:id' element={<Details/> } />
            <Route path='/category/:category' element={<Products/> } />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

