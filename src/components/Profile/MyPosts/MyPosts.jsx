import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = props => {
  let post = props.posts.map(p => (
    <Post title={p.title} like={p.likeCounter} />
  ));

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{post}</div>
    </div>
  );
};

export default MyPosts;
