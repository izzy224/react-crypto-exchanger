import axios from "axios";
import { createContext, useState, useEffect } from "react";
export const CoinsContext = createContext();

const CoinsProvider = ({ children }) => {
  const [baseCoin, setBaseCoin] = useState({});
  const [compareCoin, setCompareCoin] = useState({});
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h,24h"
      )
      .then((response) => {
        setAllCoins(response.data);
      });
  }, []);
  const value = {
    baseCoin,
    compareCoin,
    setBaseCoin,
    setCompareCoin,
    allCoins,
  };
  return (
    <CoinsContext.Provider value={value}>{children}</CoinsContext.Provider>
  );
};

export default CoinsProvider;
