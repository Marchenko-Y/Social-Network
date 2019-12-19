import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControl/FormsControl";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import "./Login.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          component={Input}
          type="text"
          placeholder="email"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="password"
          component={Input}
          placeholder="password"
          type="password"
          validate={[required]}
        />
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox" />
        Remember me
      </div>
      {error && <div className="formSummaryError">{error}</div>}
      <button> Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = ({ login, isAuth }) => {
  const onSubmit = formData => {
    login(formData.email, formData.password, formData.rememberMe);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, { login })(Login);
