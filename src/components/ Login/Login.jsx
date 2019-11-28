import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControl/FormsControl";
import { required } from "../../utils/validators/validators";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="login"
          component={Input}
          type="text"
          placeholder="login"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="password"
          component={Input}
          placeholder="password"
          validate={[required]}
        />
      </div>
      <div>
        <Field name="remember-me" component={Input} type="checkbox" />
        Remember me
      </div>

      <button> Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = () => {
  const onSubmit = formData => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
