import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLength } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/FormsControl";
const maxLength10 = maxLength(10);
const AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: "profileAddPostForm"
})(AddPostForm);

export default AddPostReduxForm;
