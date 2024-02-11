import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignup';
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/home' element={<ShopCategory category="home"/>}/>
          <Route path='/office' element={<ShopCategory category="office"/>}/>
          <Route path='outdoorliving' element={<ShopCategory category="outdoor living"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
