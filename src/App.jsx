// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "./App.css";
import Form from "./pages/form/form";
import Home from "./pages/home";
import Shop from "./pages/Shop/catalogue/shop";
import Cart from "./pages/Shop/cart/cart";

import { ShopProvider } from "./pages/Shop/shopContext";

import ProductDetails from "./pages/Shop/productDetails/productDetails";
import AdminLogin from "./pages/backoffice/admin/login/AdminLogin";
import CreateProduct from "./pages/backoffice/product/productCreate/productCreate";
import ProductList from "./pages/backoffice/product/productList/productList";
import EditProduct from "./pages/backoffice/product/productEdit/productEdit";
import { AuthProvider } from "./pages/backoffice/admin/login/authContext";
import PrivateRoute from "./pages/backoffice/admin/login/PrivateRoute";
import DashBoard from "./pages/backoffice/product/dashBoard/dashBoard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HubspotTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window._hsq) {
      window._hsq.push(["trackPageView"]);
    }
  }, [location.pathname]);

  return null;
}

// Importation des composants nécessaires

// import Navbar from "./components/Layout/NavBar";

const App = () => {
  return (
    <ShopProvider>
      <AuthProvider>
        <Router>
          <HubspotTracker />
          <div className="App">
            <Routes>
              {/* Routes pour la login */}
              <Route path="/admin/login" element={<AdminLogin />} />

              {/* Routes pour backoffice */}

              <Route
                path="/admin/dashboard"
                element={
                  <PrivateRoute>
                    <DashBoard />
                  </PrivateRoute>
                }
              />

              <Route
                path="/admin/ProductCreate"
                element={
                  <PrivateRoute>
                    <CreateProduct />
                  </PrivateRoute>
                }
              />

              <Route
                path="/admin/ProductList"
                element={
                  <PrivateRoute>
                    <ProductList />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/ProductEdit"
                element={
                  <PrivateRoute>
                    <EditProduct />
                  </PrivateRoute>
                }
              />

              {/* Routes pour la form */}
              <Route path="/form" element={<Form />} />
              {/* Routes pour le shop */}
              <Route path="/shop" element={<Shop />} />
              <Route path="/productDetails/:id" element={<ProductDetails />} />

              <Route path="/cart" element={<Cart />} />
              {/* Route par défaut (peut rediriger vers la page d'accueil) */}
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ShopProvider>
  );
};

export default App;
