import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/project/:projectId" element={<ProjectPage />}></Route>
      </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
