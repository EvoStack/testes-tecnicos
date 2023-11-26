import React, { useCallback, useEffect, useState } from "react";
import { StockForm, StockTable } from "./dashboard.component";
import { StockQuote } from "./dashboard.type";
import { useToast } from "../../components/toast.component";

export function Dashboard() {
  const [stockNameList, setStockNameList] = useState<string[]>([]);
  const [stockQuoteList, setStockQuoteList] = useState<StockQuote[]>([]);
  const { ToastComponent, showToastWithMessage } = useToast();

  const setNewNameOnList = useCallback((stockName: string) => {
    setStockNameList((prev) => [...prev, stockName]);
  }, []);

  const removeNameOnList = useCallback(
    (stockName: string) => {
      const newStockNameList = stockNameList.filter(
        (item) => item !== stockName
      );
      setStockNameList(newStockNameList);
      localStorage.setItem("stockNameList", JSON.stringify(newStockNameList));
    },
    [stockNameList]
  );

  useEffect(() => {
    const stockNameList = localStorage.getItem("stockNameList");
    if (stockNameList) {
      setStockNameList(JSON.parse(stockNameList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("stockNameList", JSON.stringify(stockNameList));
    console.log("stockNameList", stockNameList);
  }, [stockNameList]);

  return (
    <div className="flex-1 justify-center items-center flex flex-col">
      <ToastComponent />
      <h1 className="text-3xl font-bold text-center">Dashboard!</h1>
      <StockForm addStockName={setNewNameOnList} />
      {stockNameList.length == 0 ? (
        <div>
          Você ainda não tem nenhuma ação. Adicione acima para começar a
          acompanhar{" "}
        </div>
      ) : (
        <StockTable
          stockNameList={stockNameList}
          removeNameOnList={removeNameOnList}
        />
      )}
    </div>
  );
}
