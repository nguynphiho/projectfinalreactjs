import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Category from 'page/Category';
import Home from 'components/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
