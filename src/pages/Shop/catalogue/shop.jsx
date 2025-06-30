import { useState, useEffect, useContext } from "react";
import "./shop.css";
import ShopNav from "../shopNav/shopNav";
import { ShopContext } from "../shopContext";
import { Link, useNavigate } from "react-router-dom";

function Shop() {
  const [boxImage, setBoxImage] = useState(null);

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const { addToCart } = useContext(ShopContext);

  if (!products) return <p>Loading product...</p>;
  return (
    <>
      <ShopNav></ShopNav>
      <div className="shop-container">
        <div id="bg-shop">
          <div className="product-grid">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <div
                  className="product-image"
                  onClick={() => {
                    navigate("/productDetails/" + product.id);
                  }}
                >
                  <img
                    src={product.properties.hs_images}
                    onMouseEnter={(e) => {
                      e.currentTarget.src = product.properties.url_image_back;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.src = product.properties.hs_images;
                    }}
                    alt={product.properties.description}
                  />
                </div>
                <div className="product-info">
                  <div className="title-placeholder">
                    {product.properties.name}
                  </div>
                  <div className="price-placeholder">
                    €{product.properties.price}
                  </div>
                  <div
                    className="color-placeholder"
                    style={{ backgroundColor: product.properties.color }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
            <div className="product">
              <div className="product-image"></div>
              <div className="product-info">
                <div className="title-placeholder"></div>
                <div className="price-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>EXXEET © 2024</p>
      </footer>
    </>
  );
}

export default Shop;
