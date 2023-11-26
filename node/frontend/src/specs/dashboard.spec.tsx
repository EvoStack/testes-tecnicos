import { render, fireEvent, waitFor } from "@testing-library/react";
import { Dashboard } from "../pages/dashboard";
describe("Dashboard", () => {
  const { getByText, getByPlaceholderText } = render(<Dashboard />);
  const addButton = getByText("Adicionar");
  const input = getByPlaceholderText("Digite o código da ação");
  it("should render input and button to add new stock are visible", () => {
    expect(addButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("should be able to add new stock", () => {
    fireEvent.change(input, {
      target: { value: "PETR4" },
    });
    fireEvent.click(addButton);

    //espera carregar o item ao consultar o servidor
    waitFor(
      () => {
        const stock = getByText("PETR4");
        expect(stock).toBeInTheDocument();
        expect(getByText("Remover")).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });
});
