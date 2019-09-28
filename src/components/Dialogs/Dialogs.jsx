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

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialog}</div>

      <div className={styles.messages}>{message}</div>
    </div>
  );
};

export default Dialogs;
