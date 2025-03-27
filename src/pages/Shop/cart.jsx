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

  return (
    <>
      <div className="cart-wrapper">
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
              {products.map((product) => (
                <tr>
                  <td>
                    <div className="Products">
                      <div className="ProductImage">
                        <img src={product.image} alt="" />
                      </div>

                      <div className="ProductTitle">{product.name}</div>
                      <div className="ProductDesc">{product.description}</div>
                      <div className="ProductPrix">{product.prix}</div>
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
                  <td>
                    ${((quantities[product.id] || 0) * product.prix).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;
