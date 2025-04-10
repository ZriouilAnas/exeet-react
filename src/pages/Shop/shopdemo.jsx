import { useEffect, useState } from "react";
import "./shop.css";

function ShopDemo() {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // Loading state for API request

  // Fetch products from API when component mounts
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://api.example.com/products"); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data); // Set the fetched products into state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false once the request completes
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-left">
            <a href="/" className="logo">
              EXEET
            </a>
          </div>
          <div className="nav-center">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  SHOP
                </a>
                <div className="dropdown">
                  <ul>
                    <li>
                      <a href="#">MEN</a>
                    </li>
                    <li>
                      <a href="#">WOMEN</a>
                    </li>
                    <li>
                      <a href="#">KIDS</a>
                    </li>
                    <li>
                      <a href="#">ACCESSORIES</a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Other menu items... */}
            </ul>
          </div>
          <div className="nav-right">
            <a href="#" className="nav-link cart">
              CART (0)
            </a>
          </div>
        </nav>
      </header>

      <main>
        <div className="product-grid">
          {loading ? (
            <div>Loading...</div>
          ) : (
            products.map((product) => (
              <div key={product.id} className="product">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                  <div className="product-title">{product.title}</div>
                  <div className="product-price">${product.price}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <footer>
        <p>EXXEET © 2024</p>
      </footer>
    </>
  );
}

export default ShopDemo;
