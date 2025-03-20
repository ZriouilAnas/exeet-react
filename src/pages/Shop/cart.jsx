import ShopNav from "./shopNav";
import "./cart.css";
import React, { useState } from "react";
function Cart() {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <ShopNav></ShopNav>
      <div className="Cart">
        <h2>CART</h2>
        <table>
          <thead>
            <th>Product</th>
            <th>Quantiy</th>
            <th>Total</th>
          </thead>
          <tbody>
            <tr>
              <td className="Products">
                <div className="ProductImage">
                  <img src="" alt="" />
                </div>
                <div className="ProductTitle"></div>
                <div className="ProductDesc"></div>
                <div className="ProductPrix"></div>
              </td>
              <td className="QuantityTD">
                <div className="Quantity">
                  <button
                    onClick={() => {
                      setQuantity(quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </td>
              <td colspan="1">
                <p>here is total</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
