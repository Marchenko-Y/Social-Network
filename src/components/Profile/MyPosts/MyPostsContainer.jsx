import {
  addPostActionCreator,
  updatePostActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatePost: text => {
      dispatch(updatePostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
