import ShopNav from "./shopNav";
import "./cart.css";
import React, { useState } from "react";

function Cart() {
  const [quantities, setQuantities] = useState({});

  const updateQuantity = (productId, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, newQuantity),
    }));
  };

  const products = [
    {
      id: 1,
      name: "XD",
      description: "sdfdsfsdfsdfsdf",
      prix: 15,
      image: "https://placehold.co/40x40",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for product 2",
      prix: 20,
      image: "https://placehold.co/60x60",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for product 3",
      prix: 25,
      image: "", // Add image URL here
    },
  ];

  // Calcul du prix total
  const totalPrix = products.reduce(
    (total, product) => total + (quantities[product.id] || 0) * product.prix,
    0
  );

  return (
    <>
      <div className="cart-wrapper" style={{ backgroundColor: "white" }}>
        <ShopNav />

        <div className="Cart">
          <h2>CART</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="Products">
                      <div className="ProductImage">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="productflex">
                        <div className="ProductTitle">{product.name}</div>
                        <div className="ProductDesc">{product.description}</div>
                        <div className="ProductPrix">{product.prix}$</div>
                      </div>
                    </div>
                  </td>
                  <td className="QuantityTD">
                    <div className="Quantity">
                      <button
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            (quantities[product.id] || 0) - 1
                          )
                        }
                      >
                        -
                      </button>
                      <p>{quantities[product.id] || 0}</p>
                      <button
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            (quantities[product.id] || 0) + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(quantities[product.id] || 0) * product.prix}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Total :
                </td>
                <td></td>
                <td style={{ fontWeight: "bold" }}>${totalPrix.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <div className="buy">
            <a
              className="btn"
              onClick={() => {
                submit();
              }}
            >
              <div className="hover"></div>
              <span>Acheter</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
