import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateMessageActionCreator
} from "../../redux/dialogs-reducer";

const Dialogs = props => {
  const dialog = props.dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} img={d.img} />
  ));

  const message = props.dialogsPage.messages.map(m => (
    <Message message={m.message} img={m.img} />
  ));

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  const onMessageChange = event => {
    const text = event.target.value;
    props.dispatch(updateMessageActionCreator(text));
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialog}</div>
      <div>
        <div className={styles.messages}>{message}</div>
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageText}
            placeholder="Enter your message"
          />
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
