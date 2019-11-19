import { userApi } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialStore = {
  posts: [
    { id: 1, title: "Cats", likeCounter: 15 },
    { id: 2, title: "Dogs", likeCounter: 13 },
    { id: 3, title: "Birds", likeCounter: 16 },
    { id: 3, title: "Bears", likeCounter: 12 }
  ],
  newPostText: "hey hey hey!",
  profile: null
};

const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POST:
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

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
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
export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
});

export const getUserProfile = userId => dispatch => {
  userApi.getUserProfile(userId).then(data => {
    dispatch(setUserProfile(data));
  });
};

export default profileReducer;
