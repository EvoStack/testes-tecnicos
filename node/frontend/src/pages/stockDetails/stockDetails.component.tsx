import { Chart } from "react-charts";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useMemo } from "react";

export const StockChartComponent = ({ stockHistory }) => {
  const data = useMemo(
    () => [
      {
        label: "Closing",
        data: stockHistory?.prices?.map((item) => {
          return {
            primary: format(new Date(item.pricedAt), "dd/MM/yyyy", {
              locale: ptBR,
            }),
            value: item.closing,
          };
        }),
      },
      {
        label: "Opening",
        data: stockHistory?.prices?.map((item) => {
          return {
            primary: format(new Date(item.pricedAt), "dd/MM/yyyy", {
              locale: ptBR,
            }),
            value: item.opening,
          };
        }),
      },
      {
        label: "High",
        data: stockHistory?.prices?.map((item) => {
          return {
            primary: format(new Date(item.pricedAt), "dd/MM/yyyy", {
              locale: ptBR,
            }),
            value: item.high,
          };
        }),
      },
      {
        label: "Low",
        data: stockHistory?.prices?.map((item) => {
          return {
            primary: format(new Date(item.pricedAt), "dd/MM/yyyy", {
              locale: ptBR,
            }),
            value: item.low,
          };
        }),
      },
    ],
    [stockHistory]
  );

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum: { primary: string }) => datum.primary,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum: { value: number }) => datum.value,
        elementType: "line",
      },
    ],
    []
  );

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
    />
  );
};
