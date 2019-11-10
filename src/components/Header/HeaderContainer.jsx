import React from "react";
import Header from "./Header";

import { connect } from "react-redux";
import { setUserAuthData } from "../../redux/auth-reducer";
import { userApi } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    userApi.setUserAuthData().then(data => {
      if (data.resultCode === 0) {
        debugger;
        const { id, email, login } = data.data;
        this.props.setUserAuthData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id
});

export default connect(
  mapStateToProps,
  { setUserAuthData }
)(HeaderContainer);
