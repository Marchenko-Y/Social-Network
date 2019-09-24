import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let dialogs = [
  { id: 1, name: "Юлия" },
  { id: 2, name: "Клавдия" },
  { id: 3, name: "Петр" },
  { id: 4, name: "Арсений" },
  { id: 5, name: "Сергей" }
];

let messages = [
  { id: 1, message: "How are you" },
  { id: 1, message: "Hey!" },
  { id: 1, message: "And you?" }
];

let posts = [
  { id: 1, title: "Cats", likeCounter: 15 },
  { id: 2, title: "Dogs", likeCounter: 13 },
  { id: 3, title: "Birds", likeCounter: 16 },
  { id: 3, title: "Bears", likeCounter: 12 }
];

ReactDOM.render(
  <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
