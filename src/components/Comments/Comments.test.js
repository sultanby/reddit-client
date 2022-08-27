import commentsReducer, { loadComments } from "./CommentsSlice";
import { urlHelper } from "../../utils/urlHelper";
import store from "../../app/store";

const mockResponse = [
  {
    data: {
      children: [
        {
          data: {
            url: "a",
          },
        },
      ],
    },
  },
  {
    data: {
      children: [
        {
          url: "a",
        },
      ],
    },
  },
];
const headers = {
  //"User-Agent": "codecademt:go:v2.1 (by /u/sultan)",
};

test("Comments reducer returns initial state when passed an empty action", async () => {
  const initialState = undefined;
  const action = { type: "" };
  const result = commentsReducer(initialState, action);
  expect(result).toEqual({
    comments: [],
    post: {},
    isLoading: false,
    hasError: false,
    error: "",
  });
});

test("loadComments returns w/mocked dispatch", async () => {
  const dispatch = jest.fn();
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
      status: "404",
      ok: false,
    })
  );
  const thunk = loadComments();
  const params = {};
  const url = urlHelper({ params });
  await thunk(dispatch, url);
  const { calls } = dispatch.mock;
  expect(calls).toHaveLength(2);
  expect(calls[0][0].type).toEqual("comments/getComments/pending");
  expect(calls[1][0].type).toEqual("comments/getComments/rejected");
  expect(calls[1][0].payload).toEqual(undefined);
});

test("loadComments returns posts with real store", async () => {
  const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
      status: "200",
      ok: true,
    })
  );
  const params = {};
  const url = urlHelper({ params });
  await store.dispatch(loadComments(url));
  expect(fetchMock).toHaveBeenCalledWith(url, { headers: headers });
  expect(store.getState().allComments.comments).toEqual(
    mockResponse[1].data.children
  );
  expect(store.getState().allComments.post).toEqual(
    mockResponse[0].data.children[0].data
  );
});

test("loadComments throws error w/mocked dispatch", async () => {
  const dispatch = jest.fn();
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
      status: "404",
      ok: false,
    })
  );
  const thunk = loadComments();
  const params = {};
  const url = urlHelper({ params });
  await thunk(dispatch, url);
  const { calls } = dispatch.mock;
  expect(calls).toHaveLength(2);
  expect(calls[1][0].type).toEqual("comments/getComments/rejected");
  expect(calls[1][0].error.message).toEqual("404");
});
