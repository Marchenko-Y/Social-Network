import { userApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_FOLLOWING_IN_PROGRESS = "TOOGLE_IS_FOLLOWING_IN_PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      };
    case TOOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOOGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id != action.userId)
      };

    default:
      return state;
  }
};

export const followSuccess = userId => {
  return { type: FOLLOW, userId };
};

export const unfollowSucces = userId => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = users => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = currentPage => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalUsersCount = totalCount => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount };
};
export const toogleIsFenching = isFetching => {
  return { type: TOOGLE_IS_FETCHING, isFetching };
};
export const toogleFollowingProgress = (isFetching, userId) => {
  return { type: TOOGLE_FOLLOWING_IN_PROGRESS, isFetching, userId };
};

export const getUser = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(toogleIsFenching(true));
    userApi.getUsers(currentPage, pageSize).then(data => {
      dispatch(toogleIsFenching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const unfollow = userId => {
  return dispatch => {
    dispatch(toogleFollowingProgress(true, userId));
    userApi.unfollow(userId).then(data => {
      if (data.resultCode == 0) {
        dispatch(unfollowSucces(userId));
      }
      dispatch(toogleFollowingProgress(false, userId));
    });
  };
};

export const follow = userId => {
  return dispatch => {
    dispatch(toogleFollowingProgress(true, userId));
    userApi.follow(userId).then(data => {
      if (data.resultCode == 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toogleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
