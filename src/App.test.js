import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "./components/Header/Header";
import store from "./app/store";
import { Provider } from 'react-redux'

function customRender(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    store,
    history,
  };
}

test("full app rendering/navigating", async () => {
  customRender(<Header />);
  const user = userEvent.setup();
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/minireddit/i)).toBeInTheDocument();
});
