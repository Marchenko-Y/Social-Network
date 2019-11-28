import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/FormsControl/FormsControl";
import { required, maxLength } from "../../utils/validators/validators";
const maxlength50 = maxLength(50);
const Dialogs = props => {
  const dialog = props.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} img={d.img} />
  ));

  const message = props.messages.map(m => (
    <Message message={m.message} img={m.img} />
  ));

  const addMessage = values => {
    props.addMessage(values.newMessageText);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialog}</div>
      <div>
        <div className={styles.messages}>{message}</div>
        <AddMessageReduxForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

const addMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxlength50]}
          name="newMessageText"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "DialogsAddMessageForm" })(
  addMessageForm
);
export default Dialogs;
