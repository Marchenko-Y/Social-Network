import {
  addMessageActionCreator,
  updateMessageActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../hoc/AuthRedirect";

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateMessage: text => {
      dispatch(updateMessageActionCreator(text));
    }
  };
};

let WithAuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithAuthRedirectComponent);

export default DialogsContainer;
