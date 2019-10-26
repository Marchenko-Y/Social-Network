import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userFoto from "../../assets/image/user.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    alert("NEw");
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
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
