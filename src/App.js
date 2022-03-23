import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Category from 'page/Category';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/product' element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
