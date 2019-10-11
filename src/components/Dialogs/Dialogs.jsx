import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  const dialog = props.dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} img={d.img} />
  ));

  const message = props.dialogsPage.messages.map(m => (
    <Message message={m.message} img={m.img} />
  ));

  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
    debugger;
  };
  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text });
    debugger;
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialog}</div>
      <div>
        <div className={styles.messages}>{message}</div>
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.dialogsPage.newMessageText}
          />
        </div>
        <div>
          <button onClick={addMessage}>Sent</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
