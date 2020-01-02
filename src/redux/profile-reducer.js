import { userApi, profileApi } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "GET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

const initialStore = {
  posts: [
    { id: 1, title: "Cats", likeCounter: 15 },
    { id: 2, title: "Dogs", likeCounter: 13 },
    { id: 3, title: "Birds", likeCounter: 16 },
    { id: 4, title: "Bears", likeCounter: 12 }
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        title: action.newPostText,
        likeCounter: 5
      };

      return {
        ...state,
        posts: [...state.posts, newPost]
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      };

    default:
      return state;
  }
};

export const addPostActionCreator = newPostText => ({
  type: ADD_POST,
  newPostText
});

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
});
export const setStatus = status => ({
  type: SET_STATUS,
  status
});
export const savePhotoSuccess = photos => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
});

export const getUserProfile = userId => async dispatch => {
  const data = await userApi.getUserProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = userId => async dispatch => {
  const data = await profileApi.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = status => async dispatch => {
  const data = await profileApi.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = file => async dispatch => {
  const data = await profileApi.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};
export const saveProfile = formData => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const data = await profileApi.saveProfile(formData);
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
    return Promise.reject(data.messages[0]);
  }
};

export default profileReducer;
