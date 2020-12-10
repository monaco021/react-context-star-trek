import React, {createContext, useState, useCallback, useEffect} from "react";
import { initialCards, initialInventory, initialDecks } from "../../mockdata/CardData";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [applicationState, setApplicationState] = useState({
    decks: initialDecks,
    inventory: initialInventory
  });
  const [count, setCount] = useState(0);
  
  const buyCard = useCallback((cardId) => {
    console.log(cardId);
  }, []);

  useEffect(() => {
    console.log("INVENTORY UPDATED", applicationState.inventory)
  }, [applicationState.inventory]);

    return (
        <AppContext.Provider value={{ // This is the information that wiil be passed into createContext.
            ...applicationState,
            cards: initialCards,
            buyCard: buyCard,
        }}>
          {children}
        </AppContext.Provider>
      );
}


export default AppContextProvider;



// cards
// decks
// inventory 
// buyCard