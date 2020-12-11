import React, {createContext, useState, useCallback, useEffect} from "react";
import { initialCards, initialInventory, initialDecks } from "../../mockdata/CardData";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [applicationState, setApplicationState] = useState({
    decks: initialDecks,
    inventory: initialInventory,
  });

  const buyCard = useCallback((cardId) => {
    console.log(cardId);
    const copyOfInventory = {};
    Object.keys(applicationState.inventory).forEach((id) => {
      copyOfInventory[id] = applicationState.inventory[id];
    });

    const cardInventory = copyOfInventory[cardId]--;

    if (cardInventory > 0) {
      setApplicationState({
        decks: applicationState.decks,
        inventory: copyOfInventory,
      });
    } else {
      console.log("Out Of Stock")
    }
  }, [applicationState]);

  useEffect(() => {
    console.log("INVENTORY UPDATED", applicationState.inventory)
  }, [applicationState]);

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
