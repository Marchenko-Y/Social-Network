import { authApi, securityApi } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

const initiatialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initiatialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = captchaUrl => {
  debugger;
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    data: { captchaUrl }
  };
};

export const getAuthUserData = () => async dispatch => {
  const data = await authApi.me();
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setUserAuthData(id, email, login, true));
  }
};

export const login = (
  email,
  password,
  rememberMe,
  captcha
) => async dispatch => {
  const data = await authApi.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    const message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = () => async dispatch => {
  const data = await securityApi.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};
export const logout = () => async dispatch => {
  const data = await authApi.logout();
  if (data.resultCode === 0) {
    dispatch(setUserAuthData(null, null, null, false));
  }
};
export default authReducer;
