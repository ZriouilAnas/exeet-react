// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "./App.css";
import Form from "./pages/form";
import Home from "./pages/home";
import Shop from "./pages/Shop/shop";
import Cart from "./pages/Shop/cart";
import ShopDemo from "./pages/Shop/shopdemo";
import { ShopProvider } from "./pages/Shop/shopContext";
import LoginPage from "./pages/backoffice/login";
import ProductList from "./pages/backoffice/products";
import RegisterPage from "./pages/backoffice/Register";
import ProductDetails from "./pages/Shop/productDetails";

// Importation des composants nécessaires

// import Navbar from "./components/Layout/NavBar";

const App = () => {
  return (
    <ShopProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Routes pour la login */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={RegisterPage} />
            {/* Routes pour backoffice */}
            <Route path="/products" element={<ProductList />} />

            {/* Routes pour la form */}
            <Route path="/form" element={<Form />} />
            {/* Routes pour le shop */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/shopdemp" element={<ShopDemo />} />
            <Route path="/cart" element={<Cart />} />
            {/* Route par défaut (peut rediriger vers la page d'accueil) */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ShopProvider>
  );
};

export default App;
