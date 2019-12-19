import React from "react";
import { connect } from "react-redux";
import {
  followSuccess,
  unfollowSucces,
  setCurrentPage,
  toogleFollowingProgress,
  getUser,
  unfollow,
  follow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUser(currentPage, pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.getUser(pageNumber);
    this.props.setCurrentPage(pageNumber);
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
          followSuccess={this.props.followSuccess}
          unfollowSucces={this.props.unfollowSucces}
          toogleFollowingProgress={this.props.toogleFollowingProgress}
          followingProgress={this.props.followingProgress}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
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
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  };
};

export default compose(
  connect(mapStateToProps, {
    followSuccess,
    unfollowSucces,
    setCurrentPage,
    toogleFollowingProgress,
    getUser,
    unfollow,
    follow
  })
)(UsersContainer);
