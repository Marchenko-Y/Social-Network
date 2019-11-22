import {
  addMessageActionCreator,
  updateMessageActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";

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
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
