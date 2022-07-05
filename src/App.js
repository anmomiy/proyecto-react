//React
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import {CartProvider} from './context/CartContext';
//Pages
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js'
import Details from './pages/Details.js'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
//CSS
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
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

