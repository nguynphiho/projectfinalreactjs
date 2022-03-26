import SignInOutContainter from "./components/LoginAndRegister";
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Cart from 'page/Cart';
import Category from 'page/Category';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from 'components/Home';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Category />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<SignInOutContainter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
