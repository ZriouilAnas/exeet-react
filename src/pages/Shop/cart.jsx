import ShopNav from "./shopNav";
import "./cart.css";
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./shopContext";

function Cart() {
  const { cartItems, updateQuantity } = useContext(ShopContext);

  const updateQuant = (id, newQuantity) => {
    // Update the quantity using the context provider
    if (newQuantity >= 0) {
      updateQuantity(id, newQuantity);
    }
  };

  // Calcul du prix total
  const totalPrix = cartItems.reduce(
    (total, product) => total + (product.quantity || 0) * product.prix,
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
              {cartItems.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="Products">
                      <div className="ProductImage">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="productflex">
                        <div className="ProductTitle">{product.name}</div>
                        <div className="ProductDesc">{product.description}</div>
                        <div className="ProductPrix">{product.prix}€</div>
                      </div>
                    </div>
                  </td>
                  <td className="QuantityTD">
                    <div className="Quantity">
                      <button
                        onClick={() =>
                          updateQuant(product.id, (product.quantity || 0) - 1)
                        }
                      >
                        -
                      </button>
                      <p>{product.quantity || 0}</p>
                      <button
                        onClick={() =>
                          updateQuant(product.id, (product.quantity || 0) + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>€{(product.quantity || 0) * product.prix}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Total :
                </td>
                <td></td>
                <td style={{ fontWeight: "bold" }}>€{totalPrix.toFixed(2)}</td>
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
