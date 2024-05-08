import "./Card.css";
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { CardItems, food_list, removeFromCard, getTotalCardAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="card">
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
                  <p onClick={() => removeFromCard(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="card-bottom">
        <div className="card-totals">
          <h2>Card Totals</h2>
          <div>
            <div className="card-totlal-details">
              <p>Subtotal</p>
              <p>${getTotalCardAmount()}</p>
            </div>
            <hr />
            <div className="card-totlal-details">
              <p>Delivery Fee</p>
              <p>${getTotalCardAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="card-totlal-details">
              <b>Total</b>
              <b>
                ${getTotalCardAmount() === 0 ? 0 : getTotalCardAmount() + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="card-promocode">
          <div>
            <p>If You Have a Promocode, Enter It Here.</p>
            <div className="card-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
