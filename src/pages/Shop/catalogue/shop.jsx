import { useState, useEffect, useContext } from "react";
import "./shop.css";
import ShopNav from "../shopNav/shopNav";
import { ShopContext } from "../shopContext";
import { Link, useNavigate } from "react-router-dom";

function Shop() {
  const [boxImage, setBoxImage] = useState(null);
  //  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  /*  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.example.com/products"); // Replace with your API URL
        const data = await response.json();
        setProducts(data); // Set the fetched data to the products state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array means this effect runs once when the component mounts
*/
  const handleClick = (text, image) => {
    setBoxImage(image);
    setText(text);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const products = [
    {
      id: 1,
      name: "Mug",
      description: "un MUG aui mug",
      prix: 15,
      image: "../src/assets/img/shop/mug1.png",
      hoverImage: "../src/assets/img/shop/mug2.png",
      color: "lightgrey",
    },
    {
      id: 2,
      name: "t shirt number 1",
      description: "this is a tshirt space wise",
      prix: 15,
      image: "../src/assets/img/shop/T1F.png",
      hoverImage: "../src/assets/img/shop/T1B.png",
      color: "black",
    },
    {
      id: 3,
      name: "SPACE TRAVEL - SERIES T-SHIRT",
      description: "I LOVE SPACE <3 ",
      prix: 15,
      image: "../src/assets/img/shop/T2F.png",
      hoverImage: "../src/assets/img/shop/T2B.png",
      color: "red",
    },
  ];

  const { addToCart } = useContext(ShopContext);
  return (
    <>
      <ShopNav></ShopNav>
      <div className="shop-container">
        <div id="bg-shop">
          <div className={`fade-box ${visible ? "show" : "hide"}`}>
            <img src={boxImage} alt="" /> {text}
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <div
                  className="product-image"
                  onClick={() => {
                    navigate("/productdetails");
                  }}
                >
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
                <div className="product-info">
                  <div className="title-placeholder">{product.name}</div>
                  <div className="price-placeholder">€{product.prix}</div>
                  <div
                    className="color-placeholder"
                    style={{ backgroundColor: product.color }}
                  ></div>
                  <div
                    className="buy-placeholder"
                    onClick={() => {
                      addToCart(product);
                      handleClick(product.name, product.image);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-shopping-basket-icon lucide-shopping-basket"
                    >
                      <path d="m15 11-1 9" />
                      <path d="m19 11-4-7" />
                      <path d="M2 11h20" />
                      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                      <path d="M4.5 15.5h15" />
                      <path d="m5 11 4-7" />
                      <path d="m9 11 1 9" />
                    </svg>
                  </div>
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
