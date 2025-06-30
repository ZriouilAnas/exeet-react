import "./related.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Related() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        const randomThree = data.sort(() => 0.5 - Math.random()).slice(0, 4);
        setProducts(randomThree);
      });
  }, []);
  return (
    <div className="related-products">
      <h2 className="section-title">YOU MAY ALSO LIKE</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div
            className="product-item"
            key={product.id}
            onClick={() => {
              navigate(`/productdetails/${product.id}`);
              window.location.reload();
            }}
          >
            <div className="product-image">
              <img src={product.properties.hs_images} alt={product.name}></img>
            </div>
            <div className="product-name">{product.properties.name}</div>
            <div className="product-price">{product.properties.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Related;
