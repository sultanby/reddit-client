import { urlHelper } from "../../utils/urlHelper";
import allPostsReducer, { loadPosts } from "./AllPostsSlice";
import store from "../../app/store";

const mockResponse = {
  data: {
    children: [
      {
        data: {
          url: "a",
        },
      },
    ],
  },
};
const headers = {
  //"User-Agent": "codecademt:go:v2.1 (by /u/sultan)",
};

test("allPosts reducer returns initial state when passed an empty action", async () => {
  const initialState = undefined;
  const action = { type: "" };
  const result = allPostsReducer(initialState, action);
  expect(result).toEqual({
    posts: [],
    isLoading: false,
    hasError: false,
    error: "",
  });
});

test("loadPosts returns w/mocked dispatch", async () => {
  const dispatch = jest.fn();
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
      status: "404",
      ok: false,
    })
  );
  const thunk = loadPosts();
  const params = {};
  const url = urlHelper({ params });
  await thunk(dispatch, url);
  const { calls } = dispatch.mock;
  expect(calls).toHaveLength(2);
  expect(calls[0][0].type).toEqual("allPosts/getAllPosts/pending");
  expect(calls[1][0].type).toEqual("allPosts/getAllPosts/rejected");
  expect(calls[1][0].payload).toEqual(undefined);
});
test("loadPosts returns posts w/mocked dispatch", async () => {
  const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
      status: "200",
      ok: true,
    })
  );
  const params = {};
  const url = urlHelper({ params });
  await store.dispatch(loadPosts(url));
  expect(fetchMock).toHaveBeenCalledWith(url, { headers: headers });
  expect(store.getState().allPosts.posts).toEqual(mockResponse.data.children);
});
