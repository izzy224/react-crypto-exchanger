import axios from "axios";
import { createContext, useState, useEffect } from "react";
export const CoinsContext = createContext();

const CoinsProvider = ({ children }) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [cryptoComparator, setCryptoComparator] = useState("bitcoin");
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&price_change_percentage=1h,24h`
      )
      .then((response) => {
        setAllCoins(response.data);
      });
  }, [currency]);
  const value = {
    allCoins,
    currency,
    setCurrency,
    cryptoComparator,
    setCryptoComparator,
  };
  return (
    <CoinsContext.Provider value={value}>{children}</CoinsContext.Provider>
  );
};

export default CoinsProvider;
