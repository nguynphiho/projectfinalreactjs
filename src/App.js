import SignInOutContainter from "./components/LoginAndRegister";
import './App.css';
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <SignInOutContainter />
      <Header />
      <Footer />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
