import React from "react";
import { useBoolean } from "../src";
import "@testing-library/jest-dom";

import { render, fireEvent } from "@testing-library/react";

const TestComponent = ({ initialState = false }) => {
  const [value, actions] = useBoolean(initialState);
  return (
    <div>
      {value && <p data-testid="item">Visible!</p>}
      <button onClick={actions.on}>On</button>
      <button onClick={actions.off}>Off</button>
      <button onClick={actions.toggle}>Toggle</button>
      <button onClick={() => actions.set(true)}>Set on</button>
      <button onClick={() => actions.set(false)}>Set off</button>
    </div>
  );
};

describe("useBoolean", () => {
  test("on", () => {
    const { queryByTestId, queryByText } = render(<TestComponent />);
    expect(queryByTestId("item")).not.toBeInTheDocument();
    fireEvent.click(queryByText("On"));
    expect(queryByTestId("item")).toBeInTheDocument();
  });
  test("off", () => {
    const { queryByTestId, queryByText } = render(
      <TestComponent initialState />
    );
    expect(queryByTestId("item")).toBeInTheDocument();
    fireEvent.click(queryByText("Off"));
    expect(queryByTestId("item")).not.toBeInTheDocument();
  });
  test("toggle", () => {
    const { queryByTestId, queryByText } = render(<TestComponent />);
    expect(queryByTestId("item")).not.toBeInTheDocument();
    const toggle = queryByText("Toggle");
    fireEvent.click(toggle);
    expect(queryByTestId("item")).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(queryByTestId("item")).not.toBeInTheDocument();
  });
  test("set", () => {
    const { queryByTestId, queryByText } = render(<TestComponent />);
    expect(queryByTestId("item")).not.toBeInTheDocument();
    fireEvent.click(queryByText("Set on"));
    expect(queryByTestId("item")).toBeInTheDocument();
    fireEvent.click(queryByText("Set off"));
    expect(queryByTestId("item")).not.toBeInTheDocument();
  });
});
