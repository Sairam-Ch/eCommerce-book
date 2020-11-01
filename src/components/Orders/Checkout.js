import React from "react";

const Orders = (props) => {
  const { createOrder, handleInput, checkout } = props;
  return (
    <div className="checkout-form">
      <h1 className="heading">Shipping Address</h1>

      <div style={{ background: "#e6e6e6", padding: "20px" }}>
        <form onSubmit={createOrder}>
          <label for="fname">First Name</label>
          <input type="text" placeholder="Your name.." required />

          <label for="fname">Mobile Number</label>
          <input type="text" placeholder="Your mobile number.." required />

          <label for="lname">Email</label>
          <input type="email" placeholder="Your last name.." required />

          <label for="lname">Address</label>
          <input type="text" placeholder="Your address.." required />

          <input onClick={checkout} type="submit" value="Checkout" />
        </form>
      </div>
    </div>
  );
};

export default Orders;
