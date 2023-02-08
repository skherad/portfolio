import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element=""></Route>
        <Route path="/projects" element=""></Route>
        <Route path="/contact" element=""></Route>
      </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
