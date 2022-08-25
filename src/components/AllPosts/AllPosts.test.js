import allPostsReducer, {loadPosts} from './AllPostsSlice';

test("allPosts reducer returns initial state when passed an empty action", async () => {
    const initialState = undefined;
    const action =  {type: ''};
    const result = allPostsReducer(initialState, action);
    expect(result).toEqual({
        posts: [],
        isLoading: false,
        hasError: false,
        error: ''
    });
});
test("allPosts reducer returns initial state when passed an empty action", async () => {
    const dispatch = jest.fn();
    const state = {
        posts: [],
        isLoading: false,
        hasError: false,
        error: ''
      };
    const thunk = loadPosts();
    await thunk(dispatch, () => state, undefined);
      const { calls } = dispatch.mock;
      console.log(calls);
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toEqual("allPosts/getAllPosts/pending");
      expect(calls[1][0].type).toEqual("allPosts/getAllPosts/rejected");
      expect(calls[1][0].payload).toEqual({ success: true });
});