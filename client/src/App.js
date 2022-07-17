import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
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
            <Route element={<ProtectedRoute/>}><Route path='/profile' element={<Profile/>} /></Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
