import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items)
  const [selectedCategory, setCategory] = useState("All")
  
  function handleChange(event){
    setCategory(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if(selectedCategory === "All"){
      return true
    } else{
      return selectedCategory === item.category
    }
  })


  console.log(items)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
