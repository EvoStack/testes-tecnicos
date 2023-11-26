import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { StocksDetails } from "./pages/stockDetails";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();
const routes = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path={"/stocks/:stockName"} element={<StocksDetails />} />
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>
);

export default routes;
