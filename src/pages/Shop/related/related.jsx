import "./related.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Related() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product/public/showall")
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
              <img
                src={`http://localhost:8000${product.image_url}`}
                alt={product.name}
              ></img>
            </div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Related;
