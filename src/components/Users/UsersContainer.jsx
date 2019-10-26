import Users from "./Users";
import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator
} from "../../redux/users-reducer";

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
