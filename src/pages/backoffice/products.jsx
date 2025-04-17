import React, { useEffect, useState } from "react";

const ProductList = () => {
  // const [products, setProducts] = useState([]);

  // Replace with your actual API URL
  /*  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
*/
  const handleDelete = (id) => {
    // Remove from UI
    setProducts(products.filter((product) => product.id !== id));

    // Optional: Also send DELETE request to API
    // fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    //   .then(res => res.json())
    //   .then(() => console.log(`Deleted product ${id}`));
  };

  const handleModify = (id) => {
    alert(`Modify product with ID: ${id}`);
    // Add navigation or form to modify product
  };

  const products = [
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

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Product List</h2>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul style={styles.list}>
          {products.map((product) => (
            <li key={product.id} style={styles.item}>
              <div>
                <img style={styles.img} src={product.image} alt="" />
              </div>
              <div>
                <strong>{product.name}</strong>
                <p>${product.prix}</p>
              </div>
              <div>
                <button
                  onClick={() => handleModify(product.id)}
                  style={styles.modifyBtn}
                >
                  Modify
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  style={styles.deleteBtn}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    color: "black",
  },
  title: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "black",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    background: "#f9f9f9",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modifyBtn: {
    marginRight: "0.5rem",
    background: "#ffc107",
    border: "none",
    color: "#000",
    padding: "0.4rem 0.8rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#dc3545",
    border: "none",
    color: "white",
    padding: "0.4rem 0.8rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  img: {
    width: "8vw",
    height: "12vh",
  },
};

export default ProductList;
