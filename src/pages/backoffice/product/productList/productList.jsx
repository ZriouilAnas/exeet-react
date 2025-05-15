import React, { useEffect, useState } from "react";
import "./productList.css";
import SideNavBar from "../../admin/sideBar/sideBar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Replace with your real API
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <SideNavBar></SideNavBar>
      <div className="product-list-container">
        <h1>Product List</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset to first page on search
          }}
          className="search-input"
        />
        <ul className="product-list">
          {paginated.map((product) => (
            <li key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀ Prev
          </button>
          <span>
            Page {currentPage} / {totalPages || 1}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next ▶
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
