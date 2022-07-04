import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
