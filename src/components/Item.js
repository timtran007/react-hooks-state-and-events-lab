import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleAddToCartClick(){
    setInCart(inCart => !inCart)
  }
  const itemClass = inCart ? "in-cart" : ""
  const backgroundColor = inCart? "magenta" : "yellow"
  console.log(inCart)
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{background: backgroundColor}} onClick={handleAddToCartClick}className="add">{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
