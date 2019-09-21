import React from "react";
import Classes from "./Post.module.css";
const Post = props => {
  return (
    <div className={Classes.item}>
      <img
        src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
        alt="avatar"
      />
      {props.title}
      <div>
        <span>{`${props.like} likes`}</span>
      </div>
    </div>
  );
};

export default Post;
