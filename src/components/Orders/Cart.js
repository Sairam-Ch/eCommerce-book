import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cartItems, removeItem, proceed } = props;
  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <img
          style={{ height: "130px" }}
          src="https://www.pngitem.com/pimgs/m/480-4803503_your-cart-is-currently-empty-empty-cart-icon.png"
        />
        <h3>Your Cart is empty?</h3>
        <p>
          To add your cart&nbsp;
          <Link to={`/item`}>
             continue shopping...
          </Link>
        </p>
      </div>
    );
  }
  
  let sum = cartItems.reduce(function(prev, current) {
        return prev + +(current.pages * current.count)
        }, 0);
  let tax = Math.round(sum * 0.1)
  let shipping_fee = 40
  let total_price = Math.round(sum + tax + shipping_fee)

  return (
    <div>
      <div className="cart-wrapper">
      <h3 className="heading">Shopping Bag</h3>
      <table border="1">
        <thead>
          <tr>
            <th colSpan="2">Item</th>
            <th>Price(Rs.)</th>
            <th>Qty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => {
            return (
              <tr key={item.title}>
                <td className="img-td">
                  {index+1}
                </td>
                <td>
                  <h4>{item.title}</h4>
                </td>
                <td style={{ textAlign: "center" }}>
                  {item.pages}
                </td>
                <td style={{ textAlign: "center" }}>{item.count}</td>
                <td style={{ textAlign: "center" }}>
                  <span
                    className="cart-remove"
                    onClick={() => removeItem(item)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <div className="payment-info-div">
      <h3 className="heading">Payment Info</h3>
      <div className="payment-info">
        <p> Items Price: <span> {sum} </span> </p>
        <p> Tax: <span> {tax} </span>  </p>
        <p> Shipping Charge: <span> {shipping_fee} </span> </p>
        <hr />
        <p> Total (In rupees) <span> {total_price}</span></p>
      </div>
      <div>
        <button onClick={proceed} className="proceed-now-btn">
          Proceed
        </button>
      </div>
    </div>
  </div>  
  );
};

export default Cart;
