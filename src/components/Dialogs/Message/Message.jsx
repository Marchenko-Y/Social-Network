import React from "react";
import styles from "./../Dialogs.module.css";

const Message = props => {
  debugger;
  return (
    <div className={styles.message}>
      <img src={props.img} alt="avatar" />
      {props.message}
    </div>
  );
};

export default Message;
