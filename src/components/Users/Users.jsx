import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userFoto from "../../assets/image/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then(response => {
        console.log(response);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChange(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then(response => {
        console.log(response);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= 20; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map(p => (
            <span
              className={this.props.currentPage === p && styles.selectedPage}
              onClick={() => {
                this.onPageChange(p);
              }}
            >
              {p}
            </span>
          ))}
        </div>
        {this.props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small !== null ? u.photos.small : userFoto}
                  alt="User-foto"
                  className={styles.userFoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{u.name}</div>

              <div>{u.status}</div>
            </span>

            <span>
              <div>City:{"u.location.city"}</div>
              <div>Country:{"u.location.country"}</div>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
