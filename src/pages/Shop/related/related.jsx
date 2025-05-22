import React from "react";
import "./related.css";

const product = {
  image: "./src/assets/img/Floki.jpg",
  hoverImage: "./src/assets/img/4.png",
};

function Related() {
  return (
    <div className="related-products">
      <h2 className="section-title">YOU MAY ALSO LIKE</h2>
      <div className="products-grid">
        <div className="product-item">
          <div className="product-image">
            <img
              src={product.image}
              onMouseEnter={(e) => {
                e.currentTarget.src = product.hoverImage;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.src = product.image;
              }}
              alt={product.description}
            />
          </div>
          <div className="product-name">MEN'S F9 T-SHIRT</div>
          <div className="product-price">$35.00</div>
        </div>
        <div className="product-item">
          <div className="product-image">
            <img src="./src/assets/img/Floki.jpg" alt="" />
          </div>
          <div className="product-name">WOMEN'S DRAGON T-SHIRT</div>
          <div className="product-price">$35.00</div>
        </div>
        <div className="product-item">
          <div className="product-image">
            <img
              src={product.image}
              onMouseEnter={(e) => {
                e.currentTarget.src = product.hoverImage;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.src = product.image;
              }}
              alt={product.description}
            />
          </div>
          <div className="product-name">MEN'S SPACEX T-SHIRT</div>
          <div className="product-price">$30.00</div>
        </div>
        <div className="product-item">
          <div className="product-image">
            <img src="./src/assets/img/Floki.jpg" alt="" />
          </div>
          <div className="product-name">MEN'S DRAGON T-SHIRT</div>
          <div className="product-price">$35.00</div>
        </div>
      </div>
    </div>
  );
}

export default Related;
