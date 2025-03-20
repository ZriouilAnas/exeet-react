import { useState } from "react";
import "./shop.css";
import ShopNav from "./shopNav";

function Shop() {
  const [cart, setCart] = useState(null);
  const addToCart = () => {
    setCart(product);
  };
  return (
    <>
      <ShopNav></ShopNav>
      <main>
        <div class="product-grid">
          <div class="product" onClick={() => addToCart()}>
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
          <div class="product">
            <div class="product-image"></div>
            <div class="product-info">
              <div class="title-placeholder"></div>
              <div class="price-placeholder"></div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>EXXEET © 2024</p>
      </footer>
    </>
  );
}

export default Shop;
