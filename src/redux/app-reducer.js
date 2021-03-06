import { authApi } from "../api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initiatialState = {
  initialized: false
};

const appReducer = (state = initiatialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS
});

export const initializeApp = () => dispatch => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
