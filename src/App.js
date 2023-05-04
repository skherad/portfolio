import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="body__container">
          <div className="body__wrap">
            <Header />
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
