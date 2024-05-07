import "./Card.css";
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Card = () => {
  const { CardItems, food_list, removeFromCard } = useContext(StoreContext);

  return (
    <div className="card">
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Totle</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        <div>
          {food_list.map((item, index) => {
            if (CardItems[item._id] > 0) {
              return (
                <div>
                  <div className="card-items-title card-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{CardItems[item._id]}</p>
                    <p>${item.price * CardItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCard(item._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
