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
  "User-Agent": "codecademt:go:v2.1 (by /u/sultan)",
};
// This is the section where we mock `fetch`
// const unmockedFetch = global.fetch

// beforeAll(() => {
//   global.fetch = () =>
//     Promise.resolve({
//       json: () => Promise.resolve(mockResponse),
//       status: "200",
//       ok: true
//     })
// })

// afterAll(() => {
//   global.fetch = unmockedFetch
// })

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
  //   const state = {
  //     posts: [],
  //     isLoading: false,
  //     hasError: false,
  //     error: "",
  //   };
  const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
      status: "404",
      ok: false,
    })
  );
  const thunk = loadPosts();
  const params = {};
  const url = urlHelper({ params });
  //console.log(url);
  await thunk(dispatch, url);
  const { calls } = dispatch.mock;
  //console.log(calls);
  expect(calls).toHaveLength(2);
  expect(calls[0][0].type).toEqual("allPosts/getAllPosts/pending");
  expect(calls[1][0].type).toEqual("allPosts/getAllPosts/rejected");
  expect(calls[1][0].payload).toEqual(undefined);
});
test("loadPosts returns posts w/mocked dispatch", async () => {
  //   const dispatch = jest.fn();
  //   const state = {allPosts:{
  //     posts: [{ id: 2 }],
  //     isLoading: false,
  //     hasError: false,
  //     error: "",
  //   }
  //   };
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
