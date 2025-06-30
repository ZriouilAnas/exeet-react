import React, { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../shopContext";
import ShopNav from "../shopNav/shopNav";
import Related from "../related/related";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const { id } = useParams();
  const [produit, setProduit] = useState(null);

  const navigate = useNavigate();
  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const addtoCart = () => {
    alert(quantity + selectedSize);
  };

  const { addToCart } = useContext(ShopContext);

  /* 
  const product = {
    name: "GOD OF WAR KRATOS - GAMING T-SHIRT",
    description: "sdfdsfsdfsdfsdf",
    prix: 15,
    image: "../src/assets/img/GOD_OF_WAR.jpg",
    hoverImage: "../src/assets/img/LOGO.jpeg",
    color: "blue",
  };
*/
  const sizes = ["S", "M", "L", "XL", "2XL"];
  const handleCart = () => {
    addToCart(produit, quantity);
    navigate("/Cart");
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/product/getById/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ); // Replace with your API URL
        const data = await response.json();
        setProduit(data);
        console.log(data); // Set the fetched data to the products state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the fetch function when the component mounts
  }, [id]);

  if (!produit) return <p>Loading product...</p>;

  return (
    <>
      <ShopNav></ShopNav>
      <div className="container-details">
        <div className="content">
          <div className="product-details-grid">
            <div className="product-details-image">
              <img
                src={produit.properties.hs_images}
                alt="Falcon Heavy T-Shirt"
              />
              <img
                src={produit.properties.hs_images}
                alt="Falcon Heavy T-Shirt"
              />
            </div>

            <div className="product-details-info">
              <h1 className="product-details-title">
                {produit.properties.name}
              </h1>
              <p className="product-details-price">
                ${produit.properties.price}
              </p>

              <div className="size-details-section">
                <h3 className="size-details-label">Size</h3>
                <div className="size-details-grid">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`size-details-button ${
                        selectedSize === size ? "selected" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="color-details-section">
                <div
                  className="color-placeholder"
                  style={{ backgroundColor: produit.color }}
                ></div>
              </div>

              <div className="quantity-details-section">
                <h3 className="quantity-details-label">Quantity</h3>
                <div className="quantity-details-controls">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="quantity-details-button"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="quantity-details-display">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="quantity-details-button"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <a
                className="btn-details"
                onClick={() => {
                  handleCart();
                }}
              >
                <div className="hover"></div>
                <span>Acheter</span>
              </a>

              <div className="description-details">
                <p>
                  Celebrate the power of Falcon Heavy with this premium cotton
                  t-shirt. Features a classic fit and screen-printed graphic on
                  the front. Made from 100% cotton for comfort and durability.
                </p>
                <ul className="features-details-list">
                  <li>100% cotton</li>
                  <li>Screen printed graphic</li>
                  <li>Classic fit</li>
                  <li>Machine washable</li>
                  <li>Imported</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Related></Related>
    </>
  );
}

export default ProductDetails;
