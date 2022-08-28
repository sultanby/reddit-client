import searchReducer, { setSearchTerm, clearSearchTerm } from "./SearchSlice";

test("search reducer returns initial state when passed an empty action", async () => {
  const initialState = undefined;
  const action = { type: "" };
  const result = searchReducer(initialState, action);
  expect(result).toEqual("");
});
test("search reducer sets search term", async () => {
  const initialState = undefined;
  const action = setSearchTerm("the");
  const result = searchReducer(initialState, action);
  expect(result.length).toEqual("the".length);
});
test("search reducer clears search term", async () => {
  const initialState = undefined;
  const action = clearSearchTerm();
  const result = searchReducer(initialState, action);
  expect(result.length).toEqual("".length);
});
