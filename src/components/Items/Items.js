import React from "react";
import { Link } from "react-router-dom";
const Items = (props) => {
  const { item, individualProduct, addToCart } = props;
  return (
    <div className="item-wrapper">
      {item.map((item) => {
        return (
          <div className="item-div" key={item.title}>
            <img src= {`/assets/${item.imageLink}`} alt={item.title}/>
            <Link to={`/item/${item.title}`}>
              <h3 onClick={() => individualProduct(item)} 
                style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} 
                title={item.title}
                >
                {item.title}

              </h3>
            </Link>
            <h5>Language: {item.language}</h5>
            <p>Pages: {item.pages}</p>
            <button
              className="add-cart-btn btn"
              onClick={() => addToCart(item)}
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
