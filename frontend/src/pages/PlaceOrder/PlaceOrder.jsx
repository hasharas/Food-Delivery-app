import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCardAmount } = useContext(StoreContext);

  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <div className="card-totals">
          <h2>Card Totals</h2>
          <div>
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
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
