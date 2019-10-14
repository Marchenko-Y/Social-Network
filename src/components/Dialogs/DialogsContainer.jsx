import React from "react";
import {
  addMessageActionCreator,
  updateMessageActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
  const state = props.store.getState().dialogsPage;
  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  const onMessageChange = text => {
    props.store.dispatch(updateMessageActionCreator(text));
  };
  return (
    <Dialogs
      addMessage={addMessage}
      updateMessage={onMessageChange}
      dialogs={state.dialogs}
      messages={state.messages}
      newMessageText={state.newMessageText}
    />
  );
};

export default DialogsContainer;
