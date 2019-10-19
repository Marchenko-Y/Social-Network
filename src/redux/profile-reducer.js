const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialStore = {
  posts: [
    { id: 1, title: "Cats", likeCounter: 15 },
    { id: 2, title: "Dogs", likeCounter: 13 },
    { id: 3, title: "Birds", likeCounter: 16 },
    { id: 3, title: "Bears", likeCounter: 12 }
  ],
  newPostText: "hey hey hey!"
};

const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "ADD-POST":
      const newPost = {
        id: 5,
        title: state.newPostText,
        likeCounter: 5
      };

      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost]
      };

    case "UPDATE-NEW-POST-TEXT":
      return {
        ...state,
        newPostText: action.newText
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;
