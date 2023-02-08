import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element=""></Route>
        <Route path="/about" element=""></Route>
        <Route path="/projects" element=""></Route>
        <Route path="/contact" element=""></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
