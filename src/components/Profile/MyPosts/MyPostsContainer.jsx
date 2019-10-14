import React from "react";
import {
  addPostActionCreator,
  updatePostActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {
  const state = props.store.getState().profilePage;
  debugger;
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = text => {
    props.store.dispatch(updatePostActionCreator(text));
  };

  return (
    <MyPosts
      posts={state.posts}
      addPost={addPost}
      updatePost={onPostChange}
      newPostText={state.newPostText}
    />
  );
};

export default MyPostsContainer;
