import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

const ShopProvider = ({children}) => {
    const [borse, setBorse] = useState([]);
    const [warning, setWarning] = useState(false);
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false); // Nuovo stato per il menu a discesa del carrello

    // Aggiungi il metodo per aprire il menu a discesa del carrello
    const openCartDropdown = () => {
        setIsCartDropdownOpen(true);
    };

    // Funzione per gestire l'aggiunta di un prodotto al carrello
    const handleClick = (prod) => {
        let isPresent = false;
        borse.forEach((prodBorse) => {
            if(prod.title === prodBorse.title)
                isPresent = true;
        });
        if(isPresent){
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 2000);
            return;
        }
        setBorse([...borse, prod]);
        openCartDropdown(); // Quando si aggiunge un elemento al carrello, apri il menu a discesa del carrello
    };

    return (
        <ShopContext.Provider value={{borse, setBorse, handleClick}}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;
