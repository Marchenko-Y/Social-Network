import React from "react";
import { reduxForm, Field } from "redux-form";
import styles from "./ProfileInfo.module.css";
import { Input, Textarea } from "../../common/FormsControl/FormsControl";

const ProfileInfoForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {error && <div className={styles.formSummaryError}>{error}</div>}
        <button>Save</button>
      </div>

      <div>
        <b>Full name: </b>
        <Field
          name="fullName"
          component={Input}
          type="text"
          placeholder="Full name"
        />
      </div>
      <div>
        <b>About me: </b>
        <Field
          name="aboutMe"
          component={Input}
          type="text"
          placeholder="About me"
        />
      </div>
      <div>
        <b>Looking for a job:</b>
        <Field name="lookingForAJob" component={Input} type="checkbox" />
      </div>
      <div>
        <b>My professional skills:</b>
        <Field
          name="lookingForAJobDescription"
          component={Textarea}
          placeholder="My professional skills"
        />
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key} className={styles.contact}>
              <b>
                {key}:
                <Field
                  name={"contacts." + key}
                  component={Input}
                  type="text"
                  placeholder={key}
                />
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileInfoReduxForm = reduxForm({
  form: "edit-profile"
})(ProfileInfoForm);

export default ProfileInfoReduxForm;
