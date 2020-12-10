import React from "react";
import { initialCards } from "./mockdata/CardData";

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    return (
        <AppContext.Provider value={{
            cards: initialCards
        }}>
          {children}
        </AppContext.Provider>
      );
}

export default AppContextProvider;
