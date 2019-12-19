import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator
} from "./profile-reducer";

const state = {
  posts: [
    { id: 1, title: "Cats", likeCounter: 15 },
    { id: 2, title: "Dogs", likeCounter: 13 },
    { id: 3, title: "Birds", likeCounter: 16 },
    { id: 4, title: "Bears", likeCounter: 12 }
  ]
};
it("Posts length should be increment", () => {
  const action = addPostActionCreator("Mouses");
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});
