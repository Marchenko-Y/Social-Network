import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let post = props.posts.map(p => (
    <Post title={p.title} like={p.likeCounter} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    debugger;
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{post}</div>
    </div>
  );
};

export default MyPosts;
