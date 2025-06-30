import ShopNav from "../shopNav/shopNav";
import "./cart.css";
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../shopContext";
import Related from "../related/related";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(ShopContext);

  console.log(cartItems);
  const updateQuant = (id, newQuantity) => {
    // Update the quantity using the context provider
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  // Calcul du prix total
  const totalPrix = cartItems.reduce(
    (total, product) =>
      total + (product.quantity || 0) * product.properties.price,
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
                        <img
                          src={product.properties.hs_images}
                          alt={product.properties.name}
                        />
                      </div>
                      <div className="productflex">
                        <div className="ProductTitle">
                          {product.properties.name}
                        </div>
                        <div className="ProductDesc">
                          {product.properties.description}
                        </div>
                        <div className="ProductPrix">
                          {product.properties.price}€
                        </div>
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
                    <td>
                      <a
                        className="btn-remove"
                        onClick={() => {
                          removeFromCart(product.id);
                        }}
                      >
                        <div className="hover"></div>
                        <span>Delete</span>
                      </a>
                    </td>
                  </td>

                  <td>€{(product.quantity || 0) * product.properties.price}</td>
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
      <Related></Related>
    </>
  );
}

export default Cart;
