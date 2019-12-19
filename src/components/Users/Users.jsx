import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

let Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  followingProgress,
  unfollow,
  follow
}) => {
  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />

      {users.map(u => (
        <User
          user={u}
          followingProgress={followingProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </div>
  );
};

export default Users;
