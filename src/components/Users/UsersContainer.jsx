import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFenching
} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { userApi } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFenching(true);
    userApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toogleIsFenching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleIsFenching(true);
    userApi.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toogleIsFenching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

// let mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(followActionCreator(userId));
//     },
//     unfollow: userId => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     setUsers: users => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: pageNumber => {
//       dispatch(setCurrentPageActionCreator(pageNumber));
//     },
//     setTotalUsersCount: totalCount => {
//       dispatch(setTotalUsersCountActionCreator(totalCount));
//     },
//     toogleIsFenching: isFetching => {
//       dispatch(toggleIsFetchingActionCreator(isFetching));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFenching
  }
)(UsersContainer);
