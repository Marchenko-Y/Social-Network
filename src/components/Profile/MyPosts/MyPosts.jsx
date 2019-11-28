import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostReduxForm from "./AddPostForm";

const MyPosts = props => {
  const post = props.posts.map(p => (
    <Post title={p.title} like={p.likeCounter} />
  ));

  const addNewPost = value => {
    props.addPost(value.newPostText);
  };

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <AddPostReduxForm
        onSubmit={addNewPost}
        addPost={props.addPost}
        updatePost={props.updatePost}
      />
      <div className={styles.posts}>{post}</div>
    </div>
  );
};

export default MyPosts;
