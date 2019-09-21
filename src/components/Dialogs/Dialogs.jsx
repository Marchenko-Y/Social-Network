import React from "react";
import Classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={Classes.dialog}>
      <NavLink to={path} activeClassName={Classes.active}>
        {props.name}
      </NavLink>
    </div>
  );
};
const Message = props => {
  return <div className={Classes.message}>{props.message}</div>;
};

const Dialogs = props => {
  let dialogs = [
    { id: 1, name: "Юлия" },
    { id: 2, name: "Клавдия" },
    { id: 3, name: "Петр" },
    { id: 4, name: "Арсений" },
    { id: 5, name: "Сергей" }
  ];

  let messages = [
    { id: 1, message: "How are you" },
    { id: 1, message: "Hey!" },
    { id: 1, message: "And you?" }
  ];

  let dialog = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let message = messages.map(m => <Message message={m.message} />);

  return (
    <div className={Classes.dialogs}>
      <div className={Classes.dialogItems}>{dialog}</div>

      <div className={Classes.messages}>{message}</div>
    </div>
  );
};

export default Dialogs;
