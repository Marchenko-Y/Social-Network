import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  const dialog = props.state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} img={d.img} />
  ));

  const message = props.state.messages.map(m => (
    <Message message={m.message} img={m.img} />
  ));

  const newMessageElement = React.createRef();
  const addMessage = () => {
    const text = newMessageElement.current.value;
    alert(text);
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialog}</div>
      <div>
        <div className={styles.messages}>{message}</div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Sent</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
