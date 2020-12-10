import React, {createContext, useState, useCallback} from "react";
import { initialCards, initialInventory, initialDecks } from "../../mockdata/CardData";

const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [applicationState, setApplicationState] = useState({
    decks: initialDecks,
    inventory: initialInventory
  });
  const buyCard = useCallback((cardId) => {
    console.log(cardId);
  }, []);

    return (
        <AppContext.Provider value={{
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