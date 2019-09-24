import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  const dialog = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  const message = props.messages.map(m => <Message message={m.message} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialog}</div>

      <div className={styles.messages}>{message}</div>
    </div>
  );
};

export default Dialogs;
