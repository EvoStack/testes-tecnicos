import { createContext } from "react";
import { useQuery } from "react-query";
import client from "../../services/client";

export const StockContext = createContext({});

export function StockContextProvider({ children, stockName }) {
  const {
    data: stockQuote,
    isLoading,
    isError,
  } = useQuery(
    ["StockQuote", stockName],
    async () => {
      const response = await client.get(`${stockName}/quote`);
      return response.data;
    },
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );

  return (
    <StockContext.Provider
      value={{ stockQuote, isLoading, isError, stockName }}
    >
      {children}
    </StockContext.Provider>
  );
}
