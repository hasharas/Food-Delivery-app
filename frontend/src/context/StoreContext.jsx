import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

      const [cardItems, setCardItems] = useState({});

      const addToCard = (itemId) => {
            if(!cardItems[itemId]){
                  setCardItems((prev) => ({...prev,[itemId] : 1 }) )
            }
            else{
                  setCardItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
            }
      }

      const removeFromCard = (itemId) => {
            setCardItems((prev) => ({...prev,[itemId] : prev[itemId] + 1}))
      } 

            const contextValue = {
                  food_list
            }
            return(
                  <StoreContext.Provider value = {contextValue}>
                        {props.children}
                  </StoreContext.Provider>
            );
}

export default StoreContextProvider