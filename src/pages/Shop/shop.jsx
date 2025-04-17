import { useState } from "react";
import "./shop.css";
import ShopNav from "./shopNav";
import { ShopContext } from "./shopContext";
import { useContext } from "react";

function Shop() {
  const [boxImage, setBoxImage] = useState(null);
  //  const [product, setProduct] = useState([]);

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  const [products, setProducts] = useState([]);

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

  const handleClick = (text, image) => {
    setBoxImage(image);
    setText(text);
    setVisible(true); // Show div
    setTimeout(() => {
      setVisible(false); // Hide div after 3 seconds
    }, 3000);
  };

  /* const products = [
    {
      id: 1,
      name: "GOD OF WAR KRATOS - GAMING T-SHIRT",
      description: "sdfdsfsdfsdfsdf",
      prix: 15,
      image: "../src/assets/img/GOD_OF_WAR.jpg",
      hoverImage: "../src/assets/img/LOGO.jpeg",
      color: "blue",
    },
    {
      id: 2,
      name: "VIKINGS RAGNAR - SERIES T-SHIRT",
      description: "sdfdsfsdfsdfsdf",
      prix: 15,
      image: "../src/assets/img/Ragnar.jpeg",
      hoverImage: "../src/assets/img/LOGO.jpeg",
      color: "black",
    },
    {
      id: 3,
      name: "VIKINGS Floki - SERIES T-SHIRT",
      description: "sdfdsfsdfsdfsdf",
      prix: 15,
      image: "../src/assets/img/Floki.jpg",
      hoverImage: "../src/assets/img/LOGO.jpeg",
      color: "red",
    },
  ];
*/

  const { addToCart } = useContext(ShopContext);
  return (
    <>
      <ShopNav></ShopNav>

      <main>
        <div id="bg-shop">
          <div className={`fade-box ${visible ? "show" : "hide"}`}>
            <img src={boxImage} alt="" /> {text}
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <div
                className="product"
                key={product.id}
                onClick={() => {
                  addToCart(product);
                  handleClick(product.name, product.image);
                }}
              >
                <div className="product-image">
                  <img
                    src={product.image}
                    onMouseEnter={(e) => {
                      e.currentTarget.src = product.hoverImage;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.src = product.image;
                    }}
                    alt={product.title}
                  />
                </div>
                <div className="product-info">
                  <div className="title-placeholder">{product.name}</div>
                  <div className="price-placeholder">€{product.prix}</div>
                  <div
                    className="color-placeholder"
                    style={{ backgroundColor: product.color }}
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
      </main>

      <footer>
        <p>EXXEET © 2024</p>
      </footer>
    </>
  );
}

export default Shop;
