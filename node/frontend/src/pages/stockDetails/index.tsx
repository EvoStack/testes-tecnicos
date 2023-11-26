import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import client from "../../services/client";
import { StockChartComponent } from "./stockDetails.component";

export function StocksDetails() {
  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);
  const [from, setFrom] = useState(thirtyDaysAgo);
  const [to, setTo] = useState(today);

  const { stockName } = useParams();
  const {
    data: stockHistory,
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ["stockHistory", stockName],
    async () => {
      const response = await client.get(
        `${stockName}/history?from=${from.toISOString()}&to=${to.toISOString()}`
      );
      return response.data;
    },
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );

  return (
    <div className="align-center containerflex-1 pt-20 align-center justify-center w-full">
      <h1 className="text-3xl font-bold text-center">
        Detalhes da ação: {stockName?.toUpperCase()}
      </h1>
      {isLoading ? (
        <div className="text-center">Carregando histórico...</div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center">
            Histórico de Negociações
          </h2>
          {!isLoading && !isError && (
            <div
              className="mx-auto h-96 self-center box-content"
              style={{ maxWidth: "90%" }}
            >
              <StockChartComponent stockHistory={stockHistory} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
