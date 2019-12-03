import { authApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

const initiatialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initiatialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

export const setUserAuthData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth }
});

export const getAuthUserData = () => dispatch => {
  return authApi.me().then(data => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setUserAuthData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => dispatch => {
  authApi.login(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      const message =
        data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};
export const logout = () => {
  return dispatch => {
    authApi.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false));
      }
    });
  };
};
export default authReducer;
