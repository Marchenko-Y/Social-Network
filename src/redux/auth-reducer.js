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

export const getAuthUserData = () => async dispatch => {
  const data = await authApi.me();
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setUserAuthData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async dispatch => {
  const data = await authApi.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};
export const logout = () => async dispatch => {
  const data = await authApi.logout();
  if (data.resultCode === 0) {
    dispatch(setUserAuthData(null, null, null, false));
  }
};
export default authReducer;
