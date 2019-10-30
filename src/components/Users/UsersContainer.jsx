import Users from "./Users";
import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator
} from "../../redux/users-reducer";

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      return dispatch(followActionCreator(userId));
    },
    unfollow: userId => {
      return dispatch(unfollowActionCreator(userId));
    },
    setUsers: users => {
      return dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: pageNumber => {
      return dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: totalUsersCount => {
      return dispatch(setTotalUsersCountActionCreator(totalUsersCount));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
