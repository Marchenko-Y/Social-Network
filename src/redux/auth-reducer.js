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
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

export const setUserAuthData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login }
});

export default authReducer;
