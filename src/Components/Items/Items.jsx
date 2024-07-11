import React from "react";
import "./Item.css";

const Items = (props) => {
  {
    /* WE ARE GOING TO BE USING PROPS HERE TO PASS TO CHILDREN PARENT COMPONENT TO GATHER ALL THE NECESSARY ITEMS FROM THE ITEM LIST */
  }
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Items;
