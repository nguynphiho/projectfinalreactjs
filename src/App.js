import './App.css';
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
