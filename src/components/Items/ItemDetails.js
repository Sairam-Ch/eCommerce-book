import React from "react";

const ItemDetails = ({ addToCart, IndividualItem }) => {
  if (!IndividualItem.title) {
    return <div className="cart-empty">Page Not Found</div>;
  }

  return (
    <div>
      <div className="item-info">
        <div className="item-image">
        <img src= {`/assets/${IndividualItem.imageLink}`} alt={IndividualItem.title}/>
        </div>
        <div className="item-details">
          <h3>{IndividualItem.title}</h3>
          <p>Pages: {IndividualItem.pages}</p>
          <p>Author: {IndividualItem.author}</p>
          <p>Price: {IndividualItem.pages}</p>
          <p>Language: {IndividualItem.language}</p>
          <p>Country: {IndividualItem.country}</p>
          <p>Year of Publish: {IndividualItem.year}</p>
          <p>
            Full Details: <a href={IndividualItem.link}>Follow Link</a>
          </p>
          <div>
            <button
              className="add-cart-btn btn"
              onClick={() => addToCart(IndividualItem)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="item-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. <br /> <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. <br /> <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. <br /> <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. <br /> <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. <br />
      </div>
    </div>
  );
};

export default ItemDetails;
