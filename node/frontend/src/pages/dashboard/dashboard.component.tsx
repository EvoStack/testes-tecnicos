import { useContext, useState } from "react";
import { StockContext, StockContextProvider } from "./dashboard.context";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Button } from "flowbite-react";

function StockRow({ removeNameOnList }) {
  const { stockQuote, isLoading, isError, stockName } =
    useContext(StockContext);
  if (isError)
    return (
      <>
        <td>{stockName}</td>
        <td colSpan={2}>Erro ao carregar</td>
        <td>
          <Button
            color="failure"
            size="sm"
            onClick={() => {
              if (
                confirm(
                  `Tem certeza que deseja remover ${stockName.toUpperCase()} ?`
                )
              ) {
                removeNameOnList(stockName);
              }
            }}
            className="text-white cursor-pointer"
          >
            Remover
          </Button>
        </td>
      </>
    );
  return isLoading ? (
    <td colSpan={3}>Carregando...</td>
  ) : (
    <>
      <td>
        <Link
          className="underline text-emerald-500"
          to={`/stocks/${stockName}`}
        >
          {stockQuote?.name}
        </Link>
      </td>
      <td className="text-center">R${stockQuote?.lastPrice}</td>
      <td>
        {!!stockQuote?.pricedAt &&
          format(new Date(stockQuote?.pricedAt), "dd/MM/yyyy")}
      </td>
      <td>
        <Button
          color="failure"
          size="sm"
          onClick={() => {
            if (
              confirm(
                `Tem certeza que deseja remover ${stockName.toUpperCase()} ?`
              )
            ) {
              removeNameOnList(stockName);
            }
          }}
          className="text-white cursor-pointer"
        >
          Remover
        </Button>
      </td>
    </>
  );
}
export const StockForm = ({ addStockName }) => {
  const [symbol, setSymbol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStockName(symbol);
    setSymbol("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o código da ação"
        className="border-2 rounded-md focus:border-emerald-600 border-gray-300 bg-stone-100 py-1 px-2"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button
        type="submit"
        className="bg-emerald-600 px-5 py-1 rounded-md ml-2 shadow-lg shadow-gray-300 text-white"
      >
        Adicionar
      </button>
    </form>
  );
};

export const StockTable = ({
  stockNameList,
  removeNameOnList,
}: {
  stockNameList: string[];
  removeNameOnList: (stockName: string) => void;
}) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Nome</th>
          <th className="px-4 py-2">Preço</th>
          <th className="px-4 py-2">Data</th>
          <th className="px-4 py-2"> </th>
        </tr>
      </thead>
      <tbody>
        {stockNameList.map((stockName: string, index: number) => (
          <tr key={index}>
            <StockContextProvider stockName={stockName}>
              <StockRow removeNameOnList={removeNameOnList} />
            </StockContextProvider>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
