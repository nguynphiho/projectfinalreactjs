import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Cart from 'page/Cart';
import Category from 'page/Category';
import { Route, Routes } from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/product' element={<Category />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
