
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./Components/Navbar";
import Cart from "./pages/Cart";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" Component={Home} ></Route>

          <Route path="/products" Component={Products} exact></Route>
          <Route path="/cart" Component={Cart} exact></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
