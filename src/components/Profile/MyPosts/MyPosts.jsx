import React from "react";
import Classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  let posts = [
    { id: 1, title: "Cats", likeCounter: 15 },
    { id: 2, title: "Dogs", likeCounter: 13 },
    { id: 3, title: "Birds", likeCounter: 16 },
    { id: 3, title: "Bears", likeCounter: 12 }
  ];

  let post = posts.map(p => <Post title={p.title} like={p.likeCounter} />);

  return (
    <div className={Classes.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={Classes.posts}>{post}</div>
    </div>
  );
};

export default MyPosts;
