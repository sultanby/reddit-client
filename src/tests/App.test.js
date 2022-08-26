import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../components/Header/Header";
import store from "../app/store";
import { Provider } from "react-redux";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import App from "../App";
import Feed from "../components/Feed/Feed";

export function customRender(
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

test("can render App with redux and router", async () => {
  customRender(<App />);
  expect(screen.getByTestId("main"));
});

test("full header rendering", async () => {
  customRender(<Header />);
  //const user = userEvent.setup();
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/minireddit/i)).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "reddit logo minireddit" })
  ).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "reddit logo" })).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("renders PageNotFound", async () => {
  customRender(<PageNotFound />);
  //const user = userEvent.setup();
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
});

test("rendering feed", async () => {
  customRender(<Feed />);
  expect(screen.getByTestId("feed")).toBeInTheDocument();
});
