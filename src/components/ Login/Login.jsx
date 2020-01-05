import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControl/FormsControl";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import "./Login.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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

      {captchaUrl && <img src={captchaUrl} alt="captha" />}
      {captchaUrl && (
        <div>
          <Field
            name="captcha"
            component={Input}
            type="text"
            placeholder="Numbers from the picture"
            validate={[required]}
          />
        </div>
      )}

      {error && <div className="formSummaryError">{error}</div>}
      <button> Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = formData => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});
export default connect(mapStateToProps, { login })(Login);
