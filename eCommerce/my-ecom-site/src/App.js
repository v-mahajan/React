import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignup';
import Footer from './Components/Footer/Footer.jsx'
import home_banner from './images/homeBanner.webp'
import office_banner from './images/OfficeBanner.webp'
import outdoorLiving_banner from './images/OutdoorLiving.webp'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/home' element={<ShopCategory banner={home_banner} category="home"/>}/>
          <Route path='/office' element={<ShopCategory banner={office_banner} category="office"/>}/>
          <Route path='outdoorliving' element={<ShopCategory banner={outdoorLiving_banner} category="outdoor living"/>}/>
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
