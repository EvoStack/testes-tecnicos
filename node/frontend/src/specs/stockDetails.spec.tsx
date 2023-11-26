import { render, screen } from "@testing-library/react";
import { StocksDetails } from "../pages/stockDetails";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

describe("StockDetails", () => {
  const stockName = "PETR4";
  render(
    <MemoryRouter initialEntries={[`/stocks/${stockName}`]}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/stocks/:stockName" element={<StocksDetails />} />
        </Routes>
      </QueryClientProvider>
    </MemoryRouter>
  );
  it("should render stock name", () => {
    expect(
      screen.getByText(`Detalhes da ação: ${stockName}`)
    ).toBeInTheDocument();
  });
});
