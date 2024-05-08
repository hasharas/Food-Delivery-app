import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [CardItems, setCardItems] = useState({});

  const addToCard = (itemId) => {
    if (!CardItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCard = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCardAmount = () => {
    let totleAmount = 0;

    for (const item in CardItems) {
      if (CardItems[item] > 0) {
        let itemInfo = food_list.find((Product) => Product._id === item);
        totleAmount += itemInfo.price * CardItems[item];
      }
    }
    return totleAmount;
  };

  const contextValue = {
    food_list,
    CardItems,
    setCardItems,
    addToCard,
    removeFromCard,
    getTotalCardAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
